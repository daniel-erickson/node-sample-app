/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/




module.exports = function(mongoURI, modelInfo, model){

    var DatabaseCleaner = require('database-cleaner'),
        databaseCleaner = new DatabaseCleaner('mongodb'),
        connect = require('mongodb').connect,
        mongoose = require('mongoose');

    before(function (done){
        var db = mongoose.connection;

        db.on('error', console.error);
        db.once('open', function() {
            done();
        });
        mongoose.connect(mongoURI);
    });

    after(function(done){
        mongoose.connection.close();
        done();
    })


    beforeEach(function (done) {
        connect(mongoURI, function(err, db) {
            databaseCleaner.clean(db, function() {
                db.close();
                done();
            });
        });
    });
}