/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/
var sampleDB = require('_lib/sample_db');

module.exports.findSampleModel = function(cb){
    sampleDB.sample_model.find({},cb)
}

