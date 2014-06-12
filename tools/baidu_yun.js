
//批量打印百度云

var yun={};

var baiduyun=[]
for (var i = 6; i <= 15; i++) {
	baiduyun[i-6]="http://heiji"+i+".duapp.com/";
};
yun.baiduyun=baiduyun

var selfYun=[];
selfYun[0]="http://113.106.92.167:8013/"
selfYun[1]="http://113.106.92.166:8013/"
selfYun[2]="http://113.106.92.162:8013/"
selfYun[2]="http://113.106.92.164:8013/"
selfYun[2]="http://113.106.92.165:9180/"
yun.selfYun=selfYun

var aliYun=[]
for (var i = 1; i <= 3; i++) {
	aliYun[i-1]="http://heiji"+i+".duapp.com/";
};

console.log(yun)






