/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

var env = process.env.NODE_ENV,
    fs = require('fs');

var configPath = __dirname +"/"+ env;

/**
 * Auto load the correct config for the environment
 * Attach the result to exports.{configFileName}.params
 * Will return an error if no models are specified
 */
fs.readdirSync(configPath).forEach(function (file) {
    exports[file.substr(0,file.length-3)] = require(configPath + '/' + file);
});



