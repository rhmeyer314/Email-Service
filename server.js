const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post("/email", (req, res) => {
    res.json({Message: "Email Recieved"});
    console.log(req.body);
})

app.listen(8080, () => {
    console.log("Server is listening")
})