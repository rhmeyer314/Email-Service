const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post("/email", (req, res) => {
    res.json({Message: "Email Recieved"})
})

app.listen(8080, () => {
    console.log("Server is listening")
})