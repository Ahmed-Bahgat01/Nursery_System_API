require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const routes = require('./Routes')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser)
// server.use(routes)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Page Not Found' })
    next()
})

module.exports = app
