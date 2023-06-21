const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post("/login", (req, res) =>{
    console.log(req.body);
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Pcdfgh135790!"
      });
    
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
    con.query("USE login_jwt;", function(err, rows){
      if (err) throw err;
      console.log(rows);
    })
    con.query(`SELECT * FROM Users WHERE user = "${req.body.Date.user}" AND password = "${req.body.Date.password}";`, function(err, rows){
      if (err) throw err;
      console.log(rows, `${req.body.Date.user}, ${req.body.Date.password}`);
    })
    //res.redirect('http://localhost:3000/')
})
app.listen(3001, console.log("Loading open..."))