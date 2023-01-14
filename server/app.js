
const express = require("express")
const app = express()
const PORT = 6005;
const cors = require('cors')
const router = require("./Routes/router")
require("./db/connection")


app.use(express.json())
app.use(cors())
app.use(router)


app.listen(PORT,()=>{
    console.log("server start 6005")
})