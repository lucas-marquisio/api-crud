const product = require('../models/ProductModel')

const DeleteProductRepository = async (_id) => {
  const productFind = await product.findById(_id).lean()
  if(!productFind?._id) throw { status: 400, message: "id not find in database."}
  await product.findByIdAndDelete({ _id })
}

module.exports = DeleteProductRepository