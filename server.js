var express = require('express');
var app = express();

app.use(express.static(__dirname+'/frontend'));

app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/frontend/html/home.html');
})

app.get('/clock', function(req, res){
    res.sendFile(__dirname + '/frontend/html/clock.html');
})

app.get('/snake', function(req, res){
    res.sendFile(__dirname + '/frontend/html/snake.html');
})

app.get('/tambola', function(req, res){
    res.sendFile(__dirname + '/frontend/html/tambola.html');
})



var port= process.env.PORT  || 3000;
app.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
});