const express = require('express');
// const body_parser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.json());

app.post('/health-checkup', function(req,res){

})

// global catches
// global catches are used for error handling, any error occured will reach the function which has 4 parameters
// note: we should never show the exceptions to the end user because showing exceptions will expose our software to the user and user can understand how our software is built 
// this is a special type of middleware function in express, it has 4 arguments instead of 3 and express recognizes it as an error-handling middleware 
// because of 4 arguments
app.use(function(err,req,res,next){

})

app.listen(port, console.log(`app listenting on ${port}`));

// how will be the program flow
// first, it goes to app.use(express.json()) middleware, extracts the request body
// second, it goes to app.post() and post request is handled, if successful response is send to the user and if any error
// third, it goes to the global catches and error is handled