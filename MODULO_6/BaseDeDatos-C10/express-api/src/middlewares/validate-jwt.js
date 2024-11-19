import jwt from 'jsonwebtoken';
import { env } from "../config/config.js";

export const validateJWT = async (req, res, next) => {

    try {
        const { acces_token } = req.cookies;

        if (!acces_token) {
            return res.status(403).json({message: 'not acces token in the request'});
        }

        const data = jwt.verify(acces_token, env.jwtSecret);
        req.user_id = data.id;
        req.roles = data.roles;

           
        next();
            
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'token validation error'});
    }
};