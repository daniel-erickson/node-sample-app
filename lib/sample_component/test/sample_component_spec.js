/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/


'use strict';

var expect = require('expect.js'),
    sinon = require('sinon'),
    proxyquire = require('proxyquire');



var sampleDB = {
        sample_model:{
            find: function() {}
        },
        '@noCallThru': true
    };

var sampleComponent = proxyquire('../index', {
    '_lib/sample_db':sampleDB
});


describe('Sample Component:', function(){

    afterEach(function() {
        sampleDB.sample_model.find.restore()
    });


    describe("findSampleModel()", function(){
        it("Expect to find no models", function(done){

            sinon.stub(sampleDB.sample_model,'find').yields('test', []);

            var spy = sinon.spy();

            sampleComponent.findSampleModel(spy);

            var result = spy.calledWith('test',[]);

            expect(result).to.be(true);
            done();

        });
    })

});


