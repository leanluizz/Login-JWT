// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useContext } from 'react'
import { Context } from "../context/context.tsx"
import mysql from 'mysql'

type Data = {
  name: string,
  response: object 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
let sql = `INSERT INTO Users (user, password, email) VALUES ("${req.body.Date.user}", "${req.body.Date.password}", "${req.body.Date.email}");`
con.query(sql, function(err, rows){
  if (err) throw err;
  console.log(rows, `${req.body.Date}, ${req.body.Date}`);
})
res.redirect('http://localhost:3000/')
}
