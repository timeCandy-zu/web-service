var f = require('../zuaa/file');
var i = require('../zuaa/HttpTools');



f.eachLine("C:/temp/ip/access20140530.log",function(re){

	re=re.trim().split(" ")
    i.ip(re[1],re[0],function(re){
        console.log(re);
        f.write("C:/temp/ip/access201405301.log",re+"\n")
    });

});


