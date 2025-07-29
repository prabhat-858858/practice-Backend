require('dotenv').config();
console.log("Execute index file");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
    res.send("prabhattwi.com");
})
app.get("/login",(req,res)=>{
    res.send('<H1>this is login page</h1>');
})
app.get("/youtube",(req,res)=>{
    res.send('<h2>Chai aur code</h2>');
})
//console.log(process.env);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
