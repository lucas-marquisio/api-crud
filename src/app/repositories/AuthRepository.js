const UserModel = require('../models/UserModel')

const AuthRepository = async (email) => {
  const user = await UserModel.findOne({ email }).lean()
  return user
}

module.exports = AuthRepository