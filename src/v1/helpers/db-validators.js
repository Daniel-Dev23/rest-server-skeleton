const DB = require('../../../config/db.json');

const idValidate = ( technologyID ) => {

    const technologies = DB.technologies;
    const listIDs = technologies.map( ( property ) => {
        return property.id
    });

    const isIdValidate = listIDs.includes( technologyID );

    if ( !isIdValidate ) {
        throw new Error(`Technology with id '${ technologyID }' does not exist.`);
    }

    return true;
    
}

module.exports = {
    idValidate
}