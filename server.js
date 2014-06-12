var express = require('express')
var app = express();
var Hello = require('./zuaa/douban');



var CronJob = require('cron').CronJob;
var fs = require('fs');

var BCS = require('./zuaa/bae-bcs');
var fileDb="timecandy"
var opt = {
  host:"bcs.duapp.com",
  ak:"VNtm6pvG57YyarTyB4mNfAXw",
  sk:"5kYRQfzrdfBoVhq65a7GKE7VxfUHhqP8"
}
var client = new BCS(opt);



app.configure(function(){
    app.set('port', 18080);
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('expressdemo'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.errorHandler());
});
 
app.get('/douban/:str', function(request, response){ 
	 var testStr = request.params.str;
    Hello.read(testStr,function (re) { 
	 	 response.render('douban.ejs', {re: re,title:testStr});
	});
});
app.get('/douMovie/:str', function(request, response){ 
	 var testStr = request.params.str;
    Hello.subject(testStr,function (re) { 
	 	 response.render('douMovie.ejs', {re: re,title:testStr});
	});
}); 
app.get('/jade/:str', function (request, response) {
    var testStr = request.params.str;
    response.render('jadetest.jade', {title: testStr});
});
 



app.get('/uploadtest', function (request, response) {
    var testStr = request.params.str;
    response.render('uploadtest.ejs');
});

app.post('/file-upload', function(req, res, next) { 
  var option = {file:  req.files.thumbnail.path}; 
  client.uploadFile(fileDb, "/"+req.files.thumbnail.name, option, function(err){
    if(err){
      console.log('uploadfile faild',err);
    }else{
      console.log('uploadFile success');
    }
    res.render('uploadtest.ejs');
  });
}); 
app.get('/img/:str', function (request, response) {
  var filename = request.params.str;
    

  client.downloadFile(fileDb, "/"+filename, "name.jpg" ,  function(err ){
    if(err){
     
    }else{ 
        fs.readFile("name.jpg", "binary", function (err, file) { 
                if (err) { 
                    response.writeHead(500, { 
                        'Content-Type': 'text/plain' 
                    }); 
                    response.end(err); 
                } else { 
                    response.writeHead(200, { 
                        'Content-Type': 'image/jpeg' 
                    }); 
                    response.write(file, "binary"); 
                    response.end(); 
                } 
            }); 
      
       
    } 
  }); 
});

app.get('/tFile', function(req, response, next) {    
   fs.readFile("d043ad4bd11373f05044406aa60f4bfbfaed04cf.jpg", "binary", function (err, file) { 
                if (err) { 
                    response.writeHead(500, { 
                        'Content-Type': 'text/plain' 
                    }); 
                    response.end(err); 
                } else { 
                    response.writeHead(200, { 
                        'Content-Type': 'image/jpeg' 
                    }); 
                    response.write(file, "binary"); 
                    response.end(); 
                } 
            }); 

}); 


app.listen(18080);



 
var job = new CronJob('10 10 * * *  *', function(){
    console.log("start ---- ")
  }, function () {
    console.log("stop")
  },
  true
);



