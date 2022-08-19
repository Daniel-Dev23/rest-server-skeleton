const express = require('express');

class ServerConfig {

    constructor() {

        this.app = express();
        this.port = process.env.PORT || 3000;

    }

    listeningServer() {

        this.app.listen( this.port, () => {
            console.log(`\nREST Server API started on port "${ this.port }"...`);
            console.log(`Server URL: http://localhost:${ this.port }\n`);
        });

    }

}

module.exports = ServerConfig;