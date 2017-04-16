var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


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
   var result = dateChange(req.params.input);
   res.json(result);
});
app.get('/',function(req,res){
   var result = dateChange(req.params.input);
   res.end("Enter the date in the url");
});

app.listen(3000);
console.log("working");