const express = require('express')
const cors = require('cors')

const app = express;
app.request(cors)
const port = 3000

app.listen(port,()=>{
    console.log("Server is Running");
})