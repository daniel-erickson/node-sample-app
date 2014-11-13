/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


'use strict';

var expect = require('expect.js'),
    proxyquire = require('proxyquire');

describe('Sample Component:', function(){


    var RESPONSE = {test:"ok"},

        sampleModel = {find:function(query,cb){
           cb(null,[]);
        }},
        testModels = {sample_model:sampleModel, '@noCallThru': true},
        component = proxyquire('../index', {
            '_lib/sample_db' : testModels
        });


    describe("findSampleModel()", function(){
        it("Expect to find no models", function(done){
            component.findSampleModel(function(err,result){
                expect(result).to.eql([]);
                done();
            })
        });
    })

});


