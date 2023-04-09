const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.DB_CONNECTION_STRING)
const dbConnection = mongoose.connection
dbConnection.on('error', (error) => {
    console.error(`database connection error: ${error}`)
})
dbConnection.once('open', () => {
    console.log('DB connected ......')
    // starting server
    const port = process.env.SERVER_PORT || 8080
    app.listen(port, () => {
        console.log(`server is listening on port ${port} ......`)
    })
})
