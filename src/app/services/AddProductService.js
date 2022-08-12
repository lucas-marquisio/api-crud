const AddProductRepository = require('../repositories/AddProductRepository')
const ValidateData = require('../utils/validateData')
const { v4: uuid } = require('uuid')


const addProductService = async (product, _refererId) => {
  const { name, description, price } = product

  ValidateData(name, "field name is required to add product.")
  ValidateData(description, "field description is required to add product.")
  ValidateData(price, "field price is required to add product.")

  const Product = {
    _id: uuid(),
    _refererId,
    name, 
    description, 
    price
  }

  await AddProductRepository(Product)

  return Product

}

module.exports = addProductService