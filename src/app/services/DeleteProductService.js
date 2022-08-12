const DeleteProductRepository = require('../repositories/DeleteProductRepository')
const validateData = require('../utils/validateData')

const DeleteProductService = async (_id) => {

  validateData(_id, "param id is required to delete product.")
  await DeleteProductRepository(_id)
}

module.exports = DeleteProductService