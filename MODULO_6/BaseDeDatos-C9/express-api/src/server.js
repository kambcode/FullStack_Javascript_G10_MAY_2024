import express from 'express';
import path from 'path';

export class Server {

    constructor(options){
        const {port, routes, public_path = 'public'} = options;
        this.port = port;
        this.routes = routes;
        this.public_path = public_path;
        this.app = express();
    }


    async start(){

        this.app.use(express.json());

        this.app.use(express.static(this.public_path));

        this.app.use(this.routes);

        this.app.get('*', (req, res) => {
            const dirName = path.resolve();
            const indexPath = path.join(dirName, `/${this.public_path}/index.html`);
            res.sendFile(indexPath);
        })

        this.app.listen(this.port, () => {
            console.log('listening on port', this.port);
        });
    }

}