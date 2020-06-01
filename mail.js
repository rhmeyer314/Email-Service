const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'something secret',
        domain: 'something secret'
    }
}

const transport = nodemailer.createTransport(mailgun(auth));

const sendEmail = (email, subject, message, callback) => {
    const mailOptions = {
        from: email,
        to: 'rhmeyer314@gmail.com',
        subject: subject,
        text: message,
    }
    
    transport.sendMail(mailOptions, function(err, data) {
        if (err) {
            callback(err, null)
        }
        else {
            callback(null, data)
        }
    });
}

module.exports = sendEmail;
