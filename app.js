var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


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
  res.render("index");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
console.log("working");