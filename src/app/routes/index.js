const routes = require('express').Router()
const AuthAdmin = require('../middlewares/AdminAuth')


const AuthController = require('../controllers/AuthController')
const AddProductService = require('../controllers/AddProductController')

routes.post('/auth', AuthController)
routes.post('/product', AuthAdmin, AddProductService)

module.exports = routes