const ListProductsService = require('../services/ListProductsService')

const ListProductsController = async (req, res) => {
  try{
    const productsList = await ListProductsService()
    return res.status(200).json(productsList)
  }catch(e){
    return res.status(500).json({ error: "internal error." })
  }
}

module.exports = ListProductsController