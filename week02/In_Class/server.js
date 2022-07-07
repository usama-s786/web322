var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080

app.get('/', (req,res)=>{
    console.log(req)
    res.send("Hello from web322 course session. Please check our <a href='/about'> About page </a>")
})

app.get('/about', (req, res)=>{
    res.send("<h1>About Page: <br> created on May 19th 2022 </h1>")
})

app.listen(PORT, ()=>{
    console.log(`The application is listening on port ${PORT}`)
})