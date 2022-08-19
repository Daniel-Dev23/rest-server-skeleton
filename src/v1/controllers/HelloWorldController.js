const { request, response } = require('express');

const helloWorld = ( req = request, res = response ) => {

    return res.status(200).json({
        'status': true,
        'message': 'Hello World! Welcome to REST Server API :D'
    });

}

module.exports = { helloWorld };