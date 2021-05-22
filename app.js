const express = require('express')
const app = express()


app.get('/',(req,res)=>{
  console.log('s')
  res.send('here is the fucking text')
})



app.listen(process.env.PORT || 3000 ,()=>{console.log('listening on port')})
