const express = require('express');
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://despescacerta:despescacerta@cluster0-akekk.mongodb.net/despescacerta?retryWrites=true", 
{
    useNewUrlParser: true,

});


const app = express();

app.use(express.json());

app.use(require("./routes"));


app.listen(3000);
