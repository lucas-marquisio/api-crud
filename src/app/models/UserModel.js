const database = require('../../database')

const userModel = database.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  }
})

const UserModel = database.model('User', userModel)

module.exports = UserModel