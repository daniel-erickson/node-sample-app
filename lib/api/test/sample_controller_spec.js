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
    sinon = require('sinon'),
    proxyquire = require('proxyquire');

var req = {},
    res = {
        json: function() {}
    },
    sampleComponent = {
        findModelOne: function() {},
        '@noCallThru': true
    };

var sampleController = proxyquire('../controllers/sample', {
    '_lib/sample_component':sampleComponent
});

describe('sample controller', function(){

    afterEach(function() {
        sampleComponent.findModelOne.restore()
    });

    it("renders json", function(){
        sinon.stub(sampleComponent, 'findModelOne').yields(null, 'test');
        var mock = sinon.mock(res);
        mock.expects('json').once().withArgs('test');
        sampleController.getModelOne(req, res);
        mock.verify();
    });

    it("calls next with error", function(){
        sinon.stub(sampleComponent, 'findModelOne').yields('error');
        var next = sinon.mock();
        next.once().withArgs('error');
        sampleController.getModelOne(req, res, next);
        next.verify();
    });

});
