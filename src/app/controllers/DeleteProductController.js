const DeleteProductService = require('../services/DeleteProductService')

const DeleteProductController = async (req, res) => {
  try{
    const productId = req.params.id
    await DeleteProductService(productId)
    return res.status(200).json({ message: "Product deleted!" })
  }catch(e){
    const { status, message } = e
    return res.status(status || 500).json({ error: message || "Internal error." })
  }
}

module.exports = DeleteProductController