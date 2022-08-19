require('dotenv').config();

const ServerConfig = require('./config/ServerConfig');

const mainApp = () => {

    const serverConfig = new ServerConfig();
    serverConfig.listeningServer();

}

return mainApp();