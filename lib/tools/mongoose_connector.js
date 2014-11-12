/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


var requireDirectory = require('require-directory'),
    mongoose = require('mongoose');

module.exports.connect = function (mongoURI, callerModule, cb){

    var connection = mongoose.createConnection(mongoURI);

    connection.on('connected', function() {
        cb(null, requireDirectory(callerModule, {recurse: false, visit:visit}));
    });

    connection.on('error', cb)

    function visit(obj) {
        return connection.model(obj.name, obj.schema)
    }
}

