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
    create:function(){
        var model = new this({
            test:"Created test model on dbOne"
        });
        return model;
    }
}

modelSchema.methods = {
    instanceMethod:function(){
        console.log("Testing instance method: test:",this.test);
    }
}

module.exports = {
    schema:modelSchema,
    name:'Model2'
}



