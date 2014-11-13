/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


'use strict';

var expect = require('expect.js'),
    proxyquire = require('proxyquire');

describe('Sample Component:', function(){


    var RESPONSE = {test:"ok"},

        testModelOne = {find:function(query,cb){
           cb(null,[]);
        }},
        testModelTwo = {find:function(query,cb){
            cb(null,[]);
        }},
        testModels = {model_one:testModelOne, model_two:testModelTwo, '@noCallThru': true},
        component = proxyquire('../index', {
            '_lib/sample_db' : testModels
        });


    describe("findModelOne()", function(){
        it("Expect to find no models", function(done){
            component.findModelOne(function(err,result){
                expect(result).to.eql([]);
                done();
            })
        });
    })

    describe("findModelTwp()", function(){
        it("Expect to find no models", function(done){
            component.findModelTwo(function(err,result){
                expect(result).to.eql([]);
                done();
            })
        });
    })



});


