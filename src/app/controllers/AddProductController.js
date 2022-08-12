const AddProductService = require('../services/AddProductService')

const AddProductController = async (req, res) => {
  try{
    const product = await AddProductService(req.body, req.user._id)
    return res.status(200).json(product)
  }catch(e){
    const { message, status } = e
    return res.status(status || 500).json({ error: message || 'internal error.'})
  }
}

module.exports = AddProductController