const cors = require('cors')
const express = require('express')
const app = express()


//URL send request list
var corsOptions = {
    origin: [
        'http://192.168.43.247:3000',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002'
    ]
}

// middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
const routes = require('./src/routes')
app.use('/api', routes)

// Start server
require('events').EventEmitter.defaultMaxListeners = Infinity
 
const post = process.env.PORT || 3001
app.listen(post, ()=>{
    console.log('server is running on port', post)
})