const AuthRepository = require('../repositories/AuthRepository')
const bcrypt = require('bcryptjs')
const jwt = require('jwt-simple')

const AuthService = async (user) => {
    const { email, password } = user
    const userFind = await AuthRepository(email)

    if(userFind == null) throw {message: 'User not exists.', status: 403}
    if(!await bcrypt.compare(password, userFind.password)) throw { message: 'Password not match.', status: 403}

    delete userFind.password

    const payload = {
      ...userFind
    }

    return {
      name: userFind.name,
      token: `Bearer ${await jwt.encode(payload, process.env.JWT_HASH)}`
    }
}

module.exports = AuthService