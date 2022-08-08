const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')

const createUserAdmin = async () => {
  try{
    const UserAdmin = new UserModel({
      _id: 't---aasd-das-das-d',
      name: 'admin',
      email: 'admin',
      password: await bcrypt.hash('your_password_admin', 10)
    })
    await UserAdmin.save()
    console.info("User admin created!")
    return process.exit(0)
  }catch(e){
    console.error(`Admin not created, error: ${e.message}`)
    return process.exit(1)
  }
}

createUserAdmin()