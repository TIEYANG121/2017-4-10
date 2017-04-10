var express = require('express');
var app = express();
app.set('view engine','jade');

app.get('/',function(req,res){res.render('home')})
app.get('/movie',function(req,res){res.render('movie')})
app.get('/radio',function(req,res){res.render('radio')})
app.get('/game',function(req,res){res.render('game')})

app.listen(8080,function(){
	console.log('server is running');
})