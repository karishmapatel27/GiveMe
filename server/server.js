const path = require('path')
const express = require('express')

const giveMeRoutes = require('./routes/giveMe')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/giveMe', giveMeRoutes)

module.exports = server