const express = require('express')
require('dotenv').config()
const app = express()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const massive = require('massive')
const session = require('express-session')

app.use(express.json())





massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now listening Stu`))
    

}).catch(err => console.log(err, "not hitting database"))
