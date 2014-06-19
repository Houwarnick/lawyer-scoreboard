var Sequelize = require('sequelize');
var express = require('express');
var app = express();
var sequelize = new Sequelize('lawyer_scoreboard', 'root', null, {
	host: 'localhost',
	dialect: 'mysql'
});

var myData = {};

sequelize
	.authenticate()
	.complete(function(err) {
		if(!!err) {
			console.log('Unable to connect to the database', err)
		} else {
			console.log('Connection has been established successfully')
		}
	});

var Lawyer = sequelize.define('Lawyer', {
	name: Sequelize.STRING,
	location: Sequelize.TEXT,
	record: Sequelize.STRING,
	rate: Sequelize.STRING
});



app.get('/', function(req,res){
	res.send('hello world');
});

app.get('/lawyers', function(req, res){
	
	Lawyer.all().success(function(lawyers) {
  // lawyers will be an array of all Lawyer instances

  	res.send(lawyers);
});
	

	
});
sequelize.sync();
 var server = app.listen(8989, function(){
 	console.log('Listening on port %d', server.address().port);

 });