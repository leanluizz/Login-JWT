// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'

type Data = {
  name: string,
  response: object 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req
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
con.query(`INSERT INTO Users (user, password, email) VALUES ("${query.user}", "${query.password}", "${query.email}");`, function(err, rows){
  if (err) throw err;
  console.log(rows, `${query.user}, ${query.password}`);
})
res.redirect('http://localhost:3000/')
}
