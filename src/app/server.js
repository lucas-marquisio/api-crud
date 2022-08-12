const  express = require('express')
const cors = require('cors')

require('dotenv').config({ path: './src/.env' })

const server = express()
const routes = require('./routes')

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())
server.use(routes)


module.exports = server