/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

/**
 * Require in the sample component, all of our core logic belong in this component
 * @type {*}
 */
var sc = require('_lib/sample_component');

/**
 * Example controller to get all documents of model one
 * @param req
 * @param res
 * @param next
 */
module.exports.getModelOne = function(req,res,next){
    sc.findModelOne(function(err,response){
        if(err) return next(err);
        res.json(response);
    });
}

/**
 * Example controller to get all documents of model two
 * @param req
 * @param res
 * @param next
 */
module.exports.getModelTwo = function(req,res,next){
    sc.findModelTwo(function(err,response){
        if(err) return next(err);
        res.json(response);
    });
}