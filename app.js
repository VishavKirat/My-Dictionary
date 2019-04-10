const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var dictionaryWords = [
    {
        word: 'Vishav',
        definition: 'The greatest'
    },{
        word: 'Javascript',
        definition: 'I will be the graetest'
    },
    {
        word: 'awsome',
        definition: 'something which Vishav aready is'
    }
];

//middleware handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req,res,next){
    console.log(`${req.method} request for ${req.url}`);
    next();
})
app.use(express.static('./public'));


//adding the route of Get and POST request
app.post('/dictionary-api',function(req,res){
    dictionaryWords.push(req.body);
    // console.table(dictionaryWords)
})
app.get('/dictionary-api',function(req,res){
    res.json(dictionaryWords);
})


//adding the port
let port = (process.env.PORT || 3000)
app.listen(port)
console.log(`Express app is running at port: ${port}`);

module.exports = app;


