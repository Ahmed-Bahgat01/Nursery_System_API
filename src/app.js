require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const routes = require('./Routes')

// starting server
const server = express()
const port = process.env.SERVER_PORT || 8080
server.listen(port, () => {
    console.log(`server is listening on port ${port} ......`)
})

// middlewares & routes
server.use(morgan('tiny'))
server.use(bodyParser)
// server.use(routes)
server.use((req, res, next) => {
    res.status(404).json({ message: 'Page Not Found' })
    next()
})
