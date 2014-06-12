var f = require('../zuaa/file');
var i = require('../zuaa/HttpTools');

var fname="20140604.log"

f.eachLine("C:/temp/ip/"+fname,function(re){

	re=re.trim().split(" ")
    i.ip(re[1],re[0],function(re){
        console.log(re);
        f.write("C:/temp/ip/"+fname+"_1",re+"\n")
    });

});


