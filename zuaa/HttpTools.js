/**
 * Created by 平 on 2014/5/28.
 */

var request = require('request'); 
var cheerio = require('cheerio');
exports.ip = function(url,other,callback) {
    request("http://tool.chinaz.com/IP/?IP="+url, function(error, response, html) {
        if (!error && response.statusCode == 200) {  
               var $ = cheerio.load(html);
               eval(callback(other+" "+ $('#status strong').text()));
        } 
    });
}
exports.testUrl = function(url,callback) {
 
    request(url, function(error, response, html) {
        if (!error && response.statusCode == 200) {  
             eval(callback(response.statusCode));
        }else{
          eval(callback("error"));
        }  
    });
}

exports.zhihu=function(url,callback){
    request(url, function(error, response, html) {
        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);
            var  re={}
            re.title=$("h2").text().trim();
            re.questContent=$("#zh-question-detail").text();

            var zmitemanswer =new Array();

            $("#zh-question-answer-wrap .zm-item-answer ").each(function(index,item){
                zmitemanswer[index]={
                    "票数":$(this).find(".zm-votebar").text(),
                    "answer-head":$(this).find(".answer-head").text(),
                    "zm-item-rich-text":$(this).find(".zm-item-rich-text").text(),
                    "answer-actions":$(this).find(".answer-actions").text()
                }
            })
            re.answer=zmitemanswer



            eval(callback(re));

        }else{
            eval(callback("error"));
        }
    });
}
  


 