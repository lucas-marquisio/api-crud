const routes = require('express').Router()
const AuthAdmin = require('../middlewares/AdminAuth')

const AuthController = require('../controllers/AuthController')
const AddProductService = require('../controllers/AddProductController')
const DeleteProductService = require('../controllers/DeleteProductController')

routes.post('/auth', AuthController)
routes.post('/product', AuthAdmin, AddProductService)
routes.delete('/product/:id', AuthAdmin, DeleteProductService)

module.exports = routes