
const express = require("express")
const app = express()
const PORT = 6010;
require("./db/connection")
const cors = require('cors')
const router = require("./Routes/router")


app.use(cors());
app.use(express.json());
app.use(router);



app.get("/",(req,res) =>{
    res.status(201).json("hello Rahul")
})
app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`)
})