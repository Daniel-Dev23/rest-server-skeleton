const cors    = require('cors');
const express = require('express');
const helmet  = require('helmet');
const morgan  = require('morgan');

const { error404, error500 } = require('../src/v1/middlewares/error-handler');

class ServerConfig {

    constructor() {

        this.app = express();
        this.port = process.env.PORT || 3000;

        this.pathServices = {
            helloWorld: '/',
            technology: '/api/v1/technologies'
        }

        this.middlewares();
        this.routers();

    }

    middlewares() {

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( morgan('dev') );
        this.app.use( helmet() );

    }

    routers() {

        // Paths Services
        this.app.use( this.pathServices.helloWorld, require('../src/v1/routers/HelloWorldRouter') );
        this.app.use( this.pathServices.technology, require('../src/v1/routers/TechnologyRouter') );

        // Error 404
        this.app.use( error404 );
        // Error 500
        this.app.use( error500 );

    }

    listeningServer() {

        this.app.listen( this.port, () => {
            console.log(`\nREST Server API started on port "${ this.port }"...`);
            console.log(`Server URL: http://localhost:${ this.port }\n`);
        });

    }

}

module.exports = ServerConfig;