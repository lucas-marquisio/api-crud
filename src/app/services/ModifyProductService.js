const ModifyProductRepository = require('../repositories/ModifyProductRepository')
const validateData = require('../utils/validateData')

const ModifyProductService = async (product) => {
  const {_id, name, description, price } = product
  validateData(_id, "field _id is required.")
  validateData(name, "field name is required.")
  validateData(description, "field description is required.")
  validateData(price, "field price is required.")

  await ModifyProductRepository(product)
}

module.exports = ModifyProductService