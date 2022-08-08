const routes = require('express').Router()

const AuthController = require('../controllers/AuthController')

routes.post('/auth', AuthController)

module.exports = routes