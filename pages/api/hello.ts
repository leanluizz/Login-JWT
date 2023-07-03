// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
<<<<<<< HEAD
=======
import { useContext } from 'react'
import { Context } from "../context/context.tsx"
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
import mysql from 'mysql'

type Data = {
  name: string,
  response: object 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
<<<<<<< HEAD
  const { query } = req
=======
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
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
<<<<<<< HEAD
con.query(`INSERT INTO Users (user, password, email) VALUES ("${query.user}", "${query.password}", "${query.email}");`, function(err, rows){
  if (err) throw err;
  console.log(rows, `${query.user}, ${query.password}`);
=======
let sql = `INSERT INTO Users (user, password, email) VALUES ("${req.body.Date.user}", "${req.body.Date.password}", "${req.body.Date.email}");`
con.query(sql, function(err, rows){
  if (err) throw err;
  console.log(rows, `${req.body.Date}, ${req.body.Date}`);
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
})
res.redirect('http://localhost:3000/')
}
