const express = require('express')
const card = require('./card.json')
const app = express()

const cors = require('cors')

app.use(cors())
app.get('/',(req,res)=>{
     res.send(card)
})
    

app.listen(4000,()=>{
    console.log('server is running 4000')
})