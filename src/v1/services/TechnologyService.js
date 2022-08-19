const { v4: uuid } = require('uuid');
const model = require('../models/TechnologyModel');

const createTechnology = ( newTechnology ) => {

    try {

        const technologyToInsert = {
            id: uuid(),
            ...newTechnology,
            createAt: new Date().toLocaleString('es-MX'),
            updateAt: new Date().toLocaleString('es-MX')
        }

        const technologyCreated = model.createTechnology( technologyToInsert );

        return technologyCreated;
        
    } catch (error) {

        throw error;

    }

}

const technologies = () => {

    try {

        const allTechnologies = model.technologies();

        return allTechnologies;
        
    } catch (error) {

        throw error;

    }

}

const oneTechnology = ( technologyID ) => {

    try {

        const oneTechnology = model.oneTechnology( technologyID );

        return oneTechnology;
        
    } catch (error) {

        throw error;

    }

}

const updateTechnology = ( technologyID, changes ) => {
    
    try {

        const technologyUpdated = model.updateTechnology( technologyID, changes );

        return technologyUpdated;
        
    } catch (error) {

        throw error;

    }

}

const removeTechnology = ( technologyID ) => {

    try {

        const technologyDeleted = model.removeTechnology( technologyID );

        return technologyDeleted;
        
    } catch (error) {

        throw error;

    }

}

module.exports = {
    createTechnology,
    technologies,
    oneTechnology,
    updateTechnology,
    removeTechnology
}