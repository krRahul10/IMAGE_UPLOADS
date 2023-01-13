const express = require("express")
const app = express()
const PORT = 8004;


app.get("/",(req,res) => {
    res.status(201).json("wel come page")
})

app.listen(PORT,()=>{
    console.log("server start")
})