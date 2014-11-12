/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/
var sampleDB = require('_lib/sample_db');

module.exports.findModelOne = function(cb){
    console.log(sampleDB);
    sampleDB.model_one.find({},cb)
}

module.exports.findModelTwo = function(cb){
    sampleDB.model_two.find({},cb)
}


