import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { EMAIL_REGEX, PASSWORD_REGEX } from "../helper/constants.js";
import { User } from "../models/index.js";
import { internalError } from "../helper/http-response.js";
import { env } from "../config/config.js";


export class AuthController {

    singUp = async (req, res) => {
    try {
        console.log(req.body);
        const {username, email, password} =  req.body;

        // Validations 

        if ( !username ||!email || !password) {
            return res.status(400).json({message: 'All fields are required'})
        };

        if (!email.match(EMAIL_REGEX)) return res.status(400).json({message: 'Is not a valid email'});

        if (!password.match(PASSWORD_REGEX)) return res.status(400).json({message: 'Is not a valid password'});


        const user = await User.findOne({ where: { email }});

        console.log(user);

        if (user) {
         return res.status(400).json({message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, env.salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
    

        const userResponse = {
            username: newUser.username,
            email: newUser.email,
        }

        res.json(userResponse);
    } catch (error) {
        internalError(error, res);
    }
    };

    login = async (req, res) => {

        try {
            const { username, password } = req.body;

            if ( !username || !password ) 
                return res.status(404).json({message: 'username and password are required'});

            const foundUser = await User.findOne({ where: { username }});

            if (!foundUser) return res.status(400).json({message: 'User not found'});

            const validPassword = await bcrypt.compare(password, foundUser.password);

            if (!validPassword) {
                return res.status(400).json({message: 'Username or password are wrong'});
            };


            // generate token

            const token = jwt.sign({id: foundUser.id, username}, env.jwtSecret);

            console.log({token});
            

            return res
            .cookie('acces_token', token, {
                httpOnly: true,
                secure: env.process?.NODE_ENV === 'production',
            }) 
            .json({ id: foundUser.id, username});


        } catch (error) {
            internalError(error, res);
        }

        





    };
    
}