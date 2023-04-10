require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./Routes/index')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use('/api', routes)

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

app.use((req, res, next) => {
    res.status(404).json({ message: 'Page Not Found' })
    next()
})

// error MW
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(500).json({ message: `EXCEPTION: ${error}` })
})
module.exports = app
