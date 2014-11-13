/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


'use strict';

var mongoose = require('mongoose'),
    config = require('_lib/config'),
    modelInfo = require('../model_two'),
    expect = require('expect.js'),
    model;

describe('Model Two:', function(){

    require('./model_helper')(config.mongo.db);
    model = mongoose.model(modelInfo.name, modelInfo.schema)

    describe('Static Methods:', function(){
        describe("create()", function(){
            it("Expect model to be created", function(done){
                model.create(function(err, modelInstance){
                    expect(modelInstance).to.exist;
                    done();
                });
            });
            it("Expect model to contain default values", function(done){
                model.create(function(err, modelInstance){
                    expect(modelInstance.test).to.be("I am model two");
                    done();
                });
            });
        })

    });

    describe('Instance Methods:', function(){
        describe('instanceMethod()', function(){
            it("Expect method to exist", function(done){
                model.create(function(err, modelInstance){
                    expect(modelInstance.instanceMethod).to.exist;
                    done();
                });
            });
            it("Expect method to return correct value", function(done){
                model.create(function(err, modelInstance){
                    expect(modelInstance.instanceMethod()).to.be("I am model two");
                    done();
                });
            });
        })
    });

});

