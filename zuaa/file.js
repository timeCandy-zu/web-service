var fs= require('fs');
var lineReader = require('line-reader');
exports.eachLine = function(filename,callback) {
    lineReader.eachLine(filename, function(line, last) {
        eval(callback(line));
    });
}


/**
 * 写文件，追加模式
 * @param filename
 * @param content
 * @param callback
 */
exports.write = function(filename,content,callback) {
    fs.open(filename, 'a', function(err , fd){
        var buf = new Buffer(256);
        var len = buf.write(content, 0)
        fs.write(fd, buf, 0, len, 0, function(err, w){
            //console.log(w)
        })
    })
}
