var Hello = require('../zuaa/douban');

// Hello.read("X战警",function (re) { 
// 	 for(var key in re){
// 		console.log(re[key].title.trim().replace("\n","").replace(" ",""));
// 		console.log(re[key].url);
// 		console.log(re[key].img);
// 	 } 
// });

Hello.subject("http://movie.douban.com/subject/1792928/",function(re){
	console.log(re);
})