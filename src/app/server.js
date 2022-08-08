const  express = require('express')
const cors = require('cors')

const server = express()

require('dotenv').config()
require('../database')

server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

module.exports = server