var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(cors());

function dateChange(d) {
    var dateForm = {month:"long", day:"numeric" , year: "numeric"};
    var result = {"unix":null,"natural":null};
    if(isNaN(d)){
        var n = new Date(d);
        result.natural = n.toLocaleDateString("en-us",dateForm);
        result.unix = new Date(d).getTime()/1000;
    }else{
        var n = new Date(d *1000);
        result.unix = d;
        result.natural = n.toLocaleDateString("en-us",dateForm);
    }

    return result;
}

app.get('/:input',function(req,res){
    //res.json({name: "da7oom", age: "I won't tell you"})
   // res.end(req.params.d);
   var result = dateChange(req.params.input);
   res.json(result);
});








app.listen(3000);
console.log("working");