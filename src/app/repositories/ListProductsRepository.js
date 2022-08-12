const Products = require('../models/ProductModel')

const ListProductsRepository = async () => {
  const products = await Products.find().lean()
  return products
}

module.exports = ListProductsRepository