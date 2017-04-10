var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));
app.set('view engine','jade');

//jade测试  
app.get('/',function(req,res){
	var obj = {
		num1 : 10,
		num2 : 100
	}
	res.render('index',obj);
});
// app.get('/each',function(req,res){
// 	var fruits = ["苹果","苹果","苹果","苹果","苹果","苹果","苹果"]
// 	res.render('each',{fruits:fruits})
// })
app.get('/table',function(req,res){
	var students=[
		{name:"小明",age:2,sex:'female'},
		{name:"小红",age:2,sex:'male'},
		{name:"小蓝",age:2,sex:'female'},
		{name:"小紫",age:2,sex:'male'},
		{name:"小白",age:2,sex:'female'},
		{name:"小黑",age:2,sex:'male'}
	]
	res.render('table',{students:students})	
	
})

// //重定向测试
// app.get('/login',function(req,res){
// 	res.render('login');
// });

// app.get('/success',function(req,res){
// 	res.render('success');
// });

// app.get('/fail',function(req,res){
// 	res.render('fail');
// });

// app.post('/checklogin',function(req,res){
// 	// req.body
// 	if(req.body.username==="xiaoming"&&req.body.password==="aaa"){
// 		//重定向
// 		res.redirect('/success');
// 	}else{
// 		res.redirect('/fail');
// 	}	
// })

app.listen(8080,function(){
	console.log('server is running');
})