const express = require('express');
const sendEmail = require('./mail');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post("/email", (req, res) => {
    console.log(req.body);
    const {email, subject, message} = req.body;
    sendEmail(email, subject, message, function(err, data) {
        if (err) {
            res.status(500).json({message: "Internal Error"});
        } else {
            res.json({message: "Email sent"});
        }
    });
})

app.listen(8080, () => {
    console.log("Server is listening")
})