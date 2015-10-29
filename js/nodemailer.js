var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tina.bizaca@gmail.com',
        pass: 'croatia5'
    }
});

transporter.sendMail({
    from: 'tina.bizaca@gmail.com',
    to: 'tbizaca@mobicorp.com',
    subject: 'It worked!',
    text: 'Hello World!'
}, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent' + info.response);
    }
});