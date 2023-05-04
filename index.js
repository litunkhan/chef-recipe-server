const express = require('express')
const card = require('./card.json')
const app = express()
const cardArray = Object.values(card);
const cors = require('cors')

app.use(cors())
app.get('/',(req,res)=>{
     res.send(card)
})
 
app.get('/:id',(req,res)=>{
    const id = req.params.id;
    const viewrecipes = card.chefs.find(names=>names.id==id)
    console.log(cardArray)
    res.send(viewrecipes)
})

app.listen(4000,()=>{
    console.log('server is running 4000')
})
