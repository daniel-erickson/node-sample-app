var config = require('_lib/config'),
    express = require('express'),
    app;

// Load the models first
require('_lib/sample_db')(function(err){
    if(err) throw err;
    console.log('loaded',require('_lib/sample_db'));
    //Create the express app once the models are loaded;
    createExpressApp();
})


function createExpressApp(){
    // Create the express instance
    app = express();

// Attach app specific middleware here that needs to run before api calls
//app.use(

// Attach the api router to the express instance
// Don't require the api in until the models have been loaded
    app.use('/api', require('_lib/api'));

// Attach app specific middleware here that needs to run after api calls
//app.use(

// Start the server
    app.listen(config.express.port);

}










