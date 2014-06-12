var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});

exports.saveWiki =function(odj,callBack ) { 
  db.open(function(err, db){
      
  })
  console.log(odj);
}
 
 