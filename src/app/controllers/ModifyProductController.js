const ModifyProductService = require('../services/ModifyProductService')

const ModifyProductController = async (req, res) => {
  try{
    await ModifyProductService(req.body)
    return res.status(200).json({ message: "User updated with sucess!" })
  }catch(e){
    const { message, status} = e
    return res.status(status || 500).json({ error: message || "Internal error."})
  }
}

module.exports = ModifyProductController