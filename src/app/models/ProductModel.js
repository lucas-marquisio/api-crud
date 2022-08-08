const database = require('../../database')

const productModel = database.Schema({
  _id: {
    type: String
  },
  _refererId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }

})

const ProductModel = database.model('User', productModel)

module.exports = ProductModel