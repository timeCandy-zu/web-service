/**
 * Created by 平 on 2014/5/28.
 */

var request = require('request');
var cheerio = require('cheerio');

 
exports.read = function(id,callback) {
	var re=new Array()
    request('http://movie.douban.com/subject_search?search_text='+id, function(error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html); 
             $(".nbg").each(function(index,item){
                 { 
                    re[index]={title:$(this).attr("title"),url:$(this).attr("href"),img:$(this).find("img").attr("src")}  
                 }
             });  
             eval(callback(re));
        }  
    });
}
exports.subject=function (url,callback) {
      request("http://movie.douban.com/subject/"+1792928+"/", function(error, response, html) { 
        if (!error && response.statusCode == 200) {
            var re={}
            var $ = cheerio.load(html);  
            re["info"] =$(".related-info").html(); 
            re["title"] =format($("title").text());  



            eval(callback(re));
        }  
    });
}



function format(text){
   text=text.trim().replace("\n","")
    return text;
}









