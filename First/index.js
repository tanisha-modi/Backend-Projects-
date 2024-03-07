// console.log("hello")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('login')
})

app.get('/signup', (req, res) =>{
    res.send('signup')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})