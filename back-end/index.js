const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.listen(port,(req,res)=>{

    console.log('Server start at '+port)

})