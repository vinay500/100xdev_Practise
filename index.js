// rest API, http
const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 3000
// 1.to get the body of the request we use body_parser.json() we can also use app.use(express.json()) in this case there is no need of body_parser package
// 2.in case of app.use(express.json()) reason why only request body need this whereas request header/params doesn't need this because body can be of any type like json, text etc 
// so we use .json()
// 3.we will be using this body thing mostly for POST request because in other request we will not be sending data through request body 
app.use(body_parser.json());
app.get('/',function(req,res){
        res.send('get request');
})
app.post('/conversations', (req, res) => {
        console.log(req.body);
        // req.query => get params from URL
        // url can be like http://localhost:3000?message=123
        console.log(req.query.message);
        res.send({ msg: "2+2 = 4" })
})
app.listen(port, () => {
console.log('Example app listening on')
})
