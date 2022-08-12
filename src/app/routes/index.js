const routes = require('express').Router()
const AuthAdmin = require('../middlewares/AdminAuth')

const AuthController = require('../controllers/AuthController')
const AddProductService = require('../controllers/AddProductController')
const DeleteProductService = require('../controllers/DeleteProductController')
const ListProductsController = require('../controllers/ListProductsController')
const ModifyProductController = require('../controllers/ModifyProductController')

routes.post('/auth', AuthController)
routes.post('/product', AuthAdmin, AddProductService)
routes.delete('/product/:id', AuthAdmin, DeleteProductService)
routes.get('/products', AuthAdmin, ListProductsController)
routes.put('/product', AuthAdmin, ModifyProductController)

module.exports = routes
