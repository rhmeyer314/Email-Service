const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '6e31b6589e1725c9b856181ef82e64bc-3e51f8d2-e1c7fcd8',
        domain: 'sandbox96299ebe71424b2f966485a26fa1278c.mailgun.org'
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