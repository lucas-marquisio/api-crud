const ListProductsRepository = require('../repositories/ListProductsRepository')

const ListProductsService = async () => {
  const productsList = await ListProductsRepository()
  return productsList
}

module.exports = ListProductsService