const express = require('express')
const app = express()
const port = process.env.PORT ||1


app.get('/',(req,res)=>{
  res.send('here is the fucking text')
})



app.listen(process.env.PORT || 3000 ,()=>{console.log('listening on port'+port)})
