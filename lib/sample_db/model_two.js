/*******************************************************************************
 * Copyright (c) 2011 - 2014 Intrepica Pty Ltd <developer@intrepica.com.au>
 ******************************************************************************/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// define the userSchema
var modelSchema = new Schema({
    test:String
});

modelSchema.statics = {
    create:function(cb){
        var model = new this({
            test:"I am model two"
        });

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
    name:'Model2'
}



