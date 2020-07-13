var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'akashverma.mec18@itbhu.ac.in',
        pass: '***********'
    }
});

module.exports = function(mailOptions){
    transport.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log("email sent successfully");
        }
    })
}