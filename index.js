const express = require('express')
const router = require('./src/route')
const app = express()
const port = 5000

require('./config/db')
require('./src/controller/scheduler')

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})