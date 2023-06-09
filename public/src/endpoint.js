import express  from "express"
import { getDeets, addMoney, removeMoney } from "./database.js"

const app = express()
app.use(express.json())

//check amount
app.get("/amount", async (req, res)=>{
    const deets = await getDeets()
    res.send(deets)
})

//receiver amount
app.post("/send", async(req, res)=>{
    const {receiver} = req.body;
    const add = addMoney(receiver)
    res.status(201).send(add)
})

//send amount
app.post("/remove", async(req, res)=>{
    const {payer} = req.body;
    const remove = removeMoney(payer)
    res.status(201).send(remove)
})



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(5050, ()=>{
    console.log("Running on server 5050")
})