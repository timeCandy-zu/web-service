var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
/*数据库连接信息host,port,user,pwd*/
var db_name = 'YYsCywXyvTYAudvhjZDx';                  // 数据库名，从云平台获取
var db_host =  'mongo.duapp.com';      // 数据库地址
var db_port =  '8908';   // 数据库端口
var username = 'VNtm6pvG57YyarTyB4mNfAXw';                 // 用户名（API KEY）
var password = '5kYRQfzrdfBoVhq65a7GKE7VxfUHhqP8';                 // 密码(Secret KEY)
 
var db = new Db(db_name, new Server(db_host, db_port, {}), {w: 1}); 
exports.saveWiki(odj ) { 
  db.open(function(err, db) {
    db.authenticate(username, password, function(err, result) { 
      if (err) {
        db.close();
        res.end('Authenticate failed!');
        return;   
      }
      db.collection('wiki', function  ( ) {
      	 collection.insert(odj, function(err, docs) {
	      if (err) {  
	        return;
	      } 
	    });  
      });  
    });  
  });
}
 
 