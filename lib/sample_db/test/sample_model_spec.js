/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


'use strict';

var modelInfo = require('../sample_model'),
    expect = require('expect.js'),
    config = require('_lib/config'),
    mongoose = require('mongoose'),
    model;

describe('Sample model:', function(){

    require('./model_helper')(config.mongo.db);
    model = mongoose.model(modelInfo.name, modelInfo.schema)

    describe('Static Methods:', function(){
        describe("create()", function(){
            it("Expect model to be created with valid string", function(done){
                model.create("a", function(err, modelInstance){
                    expect(modelInstance.test).to.be('a');
                    done();
                });
            });
            it("Expect model to not be created with null data", function(done){
                model.create(null, function(err, modelInstance){
                    expect(err).to.exist;
                    expect(modelInstance).to.not.exist;
                    done();
                });
            });
            it("Expect model to not be created with invalid data", function(done){
                model.create({}, function(err, modelInstance){
                    expect(err).to.exist;
                    expect(modelInstance).to.not.exist;
                    done();
                });
            });
            it("Expect model to not be created with empty string", function(done){
                model.create("", function(err, modelInstance){
                    expect(err).to.exist;
                    expect(modelInstance).to.not.exist;
                    done();
                });
            });
        })

    });


    describe('Instance Methods:', function(){
        describe('instanceMethod()', function(){
            it("Expect method to exist", function(done){
                model.create("cat", function(err, modelInstance){
                    expect(modelInstance.instanceMethod).to.exist;
                    done();
                });
            });
            it("Expect method to return correct value", function(done){
                model.create("cat", function(err, modelInstance){
                    expect(modelInstance.instanceMethod()).to.be('cat');
                    done();
                });
            });
        })
    });

});


