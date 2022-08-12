const AuthService = require('../services/AuthService')

const AuthController = async (req, res) => {
  try{
    const auth = await AuthService(req.body)
    return res.status(200).json({ ...auth })
  }catch(e){
    const {message, status} = e
    return res.status(status || 500).json({ error: message || 'internal error.'})
  }
}

module.exports = AuthController