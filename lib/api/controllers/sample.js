/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

/**
 * Require in the sample component, all of our core logic belong in this component
 * @type {*}
 */
var sc = require('_lib/sample_component');

/**
 * Example controller to get all documents of sample model
 * @param req
 * @param res
 * @param next
 */
module.exports.findSampleModel = function(req,res,next){
    sc.findSampleModel(function(err,response){
        if(err) return next(err);
        res.json(response);
    });
}

