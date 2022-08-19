const DB = require('../../../config/db.json');
const { saveToDatabase } = require('../helpers/save-to-database');

const createTechnology = ( newTechnology ) => {

    DB.technologies.push( newTechnology );
    saveToDatabase( DB );
    
    return newTechnology;

}

const technologies = () => DB.technologies;

const oneTechnology = ( technologyID ) => {

    return DB.technologies.find( 
        ( technology ) => technology.id === technologyID 
    );

}

const updateTechnology = ( technologyID, changes ) => {

    const indexForUpdate = DB.technologies.findIndex(
        ( technology ) => technology.id === technologyID
    );

    if ( indexForUpdate === -1 ) return false;

    const technologyToUpdate = {
        ...DB.technologies[indexForUpdate],
        ...changes,
        updateAt: new Date().toLocaleString("es-MX")
    }

    DB.technologies[indexForUpdate] = technologyToUpdate;
    saveToDatabase( DB );

    return technologyToUpdate;

}

const removeTechnology = ( technologyID ) => {

    const indexForDeletion = DB.technologies.findIndex(
        ( technology ) => technology.id === technologyID
    );

    if ( indexForDeletion === -1 ) return false;

    DB.technologies.splice(indexForDeletion, 1);
    saveToDatabase( DB );

    return indexForDeletion;

}

module.exports = {
    createTechnology,
    technologies,
    oneTechnology,
    updateTechnology,
    removeTechnology
}