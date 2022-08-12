const product = require('../models/ProductModel')

const AddProductRepository = async (productData) => {
  const Product = new product({
    ...productData
  })
  await Product.save()
}

module.exports = AddProductRepository