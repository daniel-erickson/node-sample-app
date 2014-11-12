/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

/**
 * Sample Api
 *
 * The api does not talk directly to the models, instead it will run through a component
 *
 * @type {*}
 */
var express = require('express'),
    router = express.Router(),
    sampleController = require('./controllers/sample');

/**
 * Attach router specific middleware here
 */
// router.use(

/**
 * Params
 */
// router.param(

/**
 * Routes
 */
router.get('/modelone', sampleController.getModelOne);
router.get('/modeltwo', sampleController.getModelTwo);

/**
 * Export Router
 * @type Express.Router
 */
module.exports = router;
