const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const database = require('./db')
//const routes = require('./src/routes')

const app = express()
const port = process.env.PORT || 4000
app.use(cors())

app.use(cookieParser())

app.use(express.json())

//app.use(routes)

app.listen(port, function() {
    console.log(`Server runing on port ${port}`)
});

(async () => {
    try{
        console.log("Connecting to DB...")
        await database.connect()
        console.log("Success to connect!")
        //const result = await (await db.query("select * from users")).rows
        //console.table(result)
    }
    catch(error){
        console.log(`Error to connect to DB! Error: ${error}`)
    }
    finally{
        await database.end()
        console.log("Finish connection to DB")
    }
})()