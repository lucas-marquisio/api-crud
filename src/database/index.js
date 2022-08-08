const Mongoose = require('mongoose')

const connect = () => {
  Mongoose.connect(process.env.DATABASE)
    .then(() => console.info("Database Connected!"))
    .catch((e) => {
      console.error(`Database error: ${e.message}`)
      return process.exit(1)
    })
}

connect()

Mongoose.connection.on('disconnected', connect)


module.exports = Mongoose