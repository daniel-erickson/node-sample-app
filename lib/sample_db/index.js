/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


/**
 * Index file to describe a database and autoload its model
 */

var config = require('_lib/config'),
    mongooseConnector = require('_lib/tools/mongoose_connector'),
    mongoURI = config.mongo.dbOne;

/**
 * Connect to the database and attach models
 * The models will be attached to export after initialisation
 * @param cb returns the models on complete
 */
module.exports = function(cb){
    mongooseConnector.connect(mongoURI, module,  function(err, result){
        module.exports = result;
        console.log('done',module.exports);
        cb(err);
    })
}