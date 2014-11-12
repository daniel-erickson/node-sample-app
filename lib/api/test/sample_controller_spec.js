/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

/**
 * Created with IntelliJ IDEA.
 * User: dan
 * Date: 5/08/2014
 * Time: 9:45 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

var expect = require('expect.js'),
    proxyquire = require('proxyquire');

describe('Sample controller:', function(){

    describe('Requires sample component:', function(){

        describe('Call findModelOne method on sample component', function(){

            var RESPONSE = {test:"ok"},
                findModelOneSuccess = function(cb){
                    cb(null,RESPONSE)
                },
                successComponentStub = {findModelOne:findModelOneSuccess, '@noCallThru': true},
                sampleController = proxyquire('../controllers/sample', {
                    '_lib/sample_component' : successComponentStub
                });



            it("Returns correct response", function(done){
                sampleController.getModelOne({},{json:function(json){
                    expect(json).to.eql(RESPONSE)
                    done();
                }},{})
            });


            var findModelOneError = function(cb){
                    cb(ERROR,null)
                },
                ERROR = new Error("ERROR"),
                errorComponentStub = {findModelOne:findModelOneError, '@noCallThru': true},
                sampleErrorController = proxyquire('../controllers/sample', {
                    '_lib/sample_component' : errorComponentStub
                });


            it("Returns error", function(done){
                sampleErrorController.getModelOne({},{},function(error){
                    expect(error).to.eql(ERROR);
                    done();
                },{})
            });

        })

    })

});
