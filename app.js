//hshint esverson:6 

// for downloading packages 

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


// creating apps 
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = ""
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }


    res.render("list", {kindOfDay: day});
    console.log("Hello, Mosa!")
});





// 
// for creating listen functions 

app.listen(3000, function() {
    console.log("Server Runs");
});



