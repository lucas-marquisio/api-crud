const jwt = require('jwt-simple')

const AuthAdmin = (req, res, next) => {
  try{
    const headerToken = req.headers.authorization
    if(headerToken == "") return res.status(401).json({ error: 'token not provide'})
    const [bearer, token ] = headerToken.split(' ')
    const tokenDecoded = jwt.decode(token, process.env.JWT_HASH)
    req.user = { _id: tokenDecoded._id}
    next()
  }catch(e){
    return res.status(401).json({ error: "User unauthorized."})
  }
}

module.exports = AuthAdmin