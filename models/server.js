const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // PATH API's
        this.pathApiPet = '/pet';

        // Middlewares
        this.middlewares();

        // Rutas de mi Aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y Escritura del body
        this.app.use(express.json());

        // DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.pathApiPet, require('../routes/pet'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor Iniciado en el Puerto: ', this.port);
        });
    }
}

module.exports = Server;