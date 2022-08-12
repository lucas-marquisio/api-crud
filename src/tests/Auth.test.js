const request = require("supertest")
const app = require('../app/server.js')

describe('Auth test',() => {
  it('Auth sucess', async () => {
    const login = {
      email: "admin",
      password: "your_password_admin"
    }
    const response = await request(app).post('/auth').send({ ...login })
    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('token')
  })

  it('Auth error user invalid', async () => {
    const login = {
      email: "email_not_valid",
      password: "your_password_admin"
    }
    const response = await request(app).post('/auth').send({ ...login })
    expect(response.statusCode).toEqual(403)
    expect(response.body).toHaveProperty('error')
  })

  it('Auth error password invalid', async () => {
    const login = {
      email: "admin",
      password: "password_not_valid"
    }
    const response = await request(app).post('/auth').send({ ...login })
    expect(response.statusCode).toEqual(403)
    expect(response.body).toHaveProperty('error')
  })
})