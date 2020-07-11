// app.js
var schedule = require( 'node-schedule' );
var express = require( 'express' );
var app = express();

//. 毎分実行
//. https://qiita.com/n0bisuke/items/66abf6ca1c12f495aa04
schedule.scheduleJob( '* * * * *', function(){
  console.log( 'running a task every minute' );
});


app.get( '/', function( req, res ){
  res.write( JSON.stringify( { status: true }, null, 2 ) );
  res.end();
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( 'server started on ' + port );
