const error404 = ( req, res, next ) => {
    
    res.status(404).json({
        'status': false,
        'message': `Error 404: The resource '${ req.url }' you are trying to request is not available.`
    });

    next();

}

const error500 = ( err, req, res, next ) => {
    
    console.error( err.stack );
    
    res.status(500).json({
        'status': false,
        'message': "Error 500: Oops, we are experiencing server problems. Please try again later.",
        'error': err.stack
    });
    
    next();
}

module.exports = { error404, error500 }