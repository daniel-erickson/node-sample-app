/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// define the userSchema
var modelSchema = new Schema({
    test:{type:String, required:true}
});

modelSchema.statics = {
    create:function(testString, cb){
        var model = new this({
            test:testString
        });

        if(!model) return cb(new Error("Unable to create model"));

        model.save(cb);
    }
}

modelSchema.methods = {
    instanceMethod:function(){
        return this.test;
    }
}

module.exports = {
    schema:modelSchema,
    name:'Model'
}



