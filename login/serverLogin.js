const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


app.post("/sendEmail", (req, res) => {
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'luizzleandro827@gmail.com',
      pass: 'niyclwtfaiqccbud'
    },
    tls:{
      rejectUnauthorized:false
    }
    
  });
  const code = (Math.floor(Math.random() * 50).toFixed(2) * 50)
   async function main() {
    
     const info = await transporter.sendMail({
      from: 'Robot robot@gmail.com', 
      to: req.body.data, 
      subject: "Email confirmed",
      html:`
      <h1>Hello user!</h1>
      <p>Please confirm the code sended: ${code} </p>`,
    })
  console.log(info, code, new Date().getHours(), ":" ,new Date().getMinutes());
  }
main().catch(console.error)

})

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

app.post("/login_cell", (req, res) =>{
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
app.listen(3001, console.log("Login open..."))