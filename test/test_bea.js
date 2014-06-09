var http = require('http');
var BCS = require('../zuaa/bae-bcs');
// var port = process.env.APP_PORT;
// var hostname = process.env.BAE_ENV_ADDR_BCS || 'bcs.duapp.com';

var opt = {
  host:"bcs.duapp.com",
  ak:"VNtm6pvG57YyarTyB4mNfAXw",
  sk:"5kYRQfzrdfBoVhq65a7GKE7VxfUHhqP8"
}
var client = new BCS(opt);



var option = {file: 'C:/space/yun/baidu/ex/test/downloadfile.jpg'};

client.uploadFile("test1-db", '/h2-pic1.jpg', option, function(err){
  if(err){
    console.log('uploadfile faild');
  }else{
    console.log('uploadFile success');
  }
});



 