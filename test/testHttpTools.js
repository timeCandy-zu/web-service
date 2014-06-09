var Hello = require('../zuaa/HttpTools');
 
 
//
//Hello.ip("www.qegoo.cn",function(re){
//	console.log(re);
//});

Hello.zhihu("http://www.zhihu.com/question/21880113",function(re){
    console.log(re);
})