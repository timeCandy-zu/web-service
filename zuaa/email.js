var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport("Gmail",{
    auth: {
        user: "firesoul.zu@gmail.com",
        pass: "seedcat"
    }
});

var mailOptions = {
    from: "Fred Foo ✔ <firesoul.zu@gmail.com>", // sender address
    to: "zuaa@163.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
});
