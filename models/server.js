/**
 * @author Daniel Arteaga
 * 
 * Servidor de express
 */

const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port=3000;
        this.juliPath='/juli/';

        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.juliPath, require('../routes/users.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}

module.exports=Server;