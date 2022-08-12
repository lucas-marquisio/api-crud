const product = require('../models/ProductModel')

const ModifyProductRepository = async (productData) => {
  const { _id, name, description, price  } = productData
  const productFind = await product.findOne({ _id }).lean()
  if(productFind == null) throw { status: 400, message: "Product id incorrectly or product does not exist."}
  await product.findOneAndUpdate({ _id }, {
    name,
    description,
    price
  })
}

module.exports = ModifyProductRepository