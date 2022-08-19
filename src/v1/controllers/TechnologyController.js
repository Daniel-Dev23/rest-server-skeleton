const { request, response } = require('express');
const service = require('../services/TechnologyService');

const postTechnology = ( req = request, res = response ) => {

    try {

        const data = req.body;

        const newTechnology = service.createTechnology( data );

        return res.status(201).json({
            'status': true,
            'message': 'The technology has been created.',
            newTechnology
        });
        
    } catch (error) {
        
        console.log('An error has ocurred: ', error?.message);
        res.status(500).json({
            'status': false,
            'message': error?.message
        });
        
    }

}

const getTechnologies = ( req = request, res = response ) => {

    try {

        const allTechnologies = service.technologies();

        return res.status(200).json({
            'status': true,
            'data': allTechnologies
        });
        
    } catch (error) {
        
        console.log('An error has ocurred: ', error?.message);
        res.status(500).json({
            'status': false,
            'message': error?.message
        });
        
    }

}

const getTechnology = ( req = request, res = response ) => {

    try {

        const technologyID = req.params.technologyID;

        const technology = service.oneTechnology( technologyID );

        return res.status(200).json({
            'status': true,
            'data': technology
        });
        
    } catch (error) {
        
        console.log('An error has ocurred: ', error?.message);
        res.status(500).json({
            'status': false,
            'message': error?.message
        });
        
    }

}

const putTechnology = ( req = request, res = response ) => {

    try {

        const technologyID = req.params.technologyID;
        const data = req.body;

        const updateTechnology = service.updateTechnology( technologyID, data );

        return res.status(200).json({
            'status': true,
            'message': 'The technology has been updated.',
            'updateTechnology': updateTechnology
        });
        
    } catch (error) {
        
        console.log('An error has ocurred: ', error?.message);
        res.status(500).json({
            'status': false,
            'message': error?.message
        });
        
    }

}

const deleteTechnology = ( req = request, res = response ) => {

    try {

        const technologyID = req.params.technologyID;

        const technologyDelete = service.removeTechnology( technologyID );

        return res.status(200).json({
            'status': true,
            'message': 'The technology has been deleted.',
            technologyID,
            technologyDelete
        });
        
    } catch (error) {
        
        console.log('An error has ocurred: ', error?.message);
        res.status(500).json({
            'status': false,
            'message': error?.message
        });
        
    }

}

module.exports = {
    postTechnology,
    getTechnologies,
    getTechnology,
    putTechnology,
    deleteTechnology
}