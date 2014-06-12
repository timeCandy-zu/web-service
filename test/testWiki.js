var Hello = require('../zuaa/wiki');
 
 

Hello.saveWiki({"zuaa":1,name:"123"},function(re){
    console.log(re);
})