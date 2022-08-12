const request = require("supertest");
const app = require("../app/server.js");

describe("modify products test", () => {
  it("modify product sucess", async () => {
    const getProducts = await request(app)
      .get("/products")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    const response = await request(app)
      .put("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ _id: getProducts.body[0]._id, name: "product_test", description: "description_test", price: 1234})
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("message");
  })

  it("modify product error required _id", async () => {
    const response = await request(app)
      .put("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ _id: "unknow_id", name: "product_test", description: "description_test", price: 1234})
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  })

  it("modify product error required name", async () => {
    const getProducts = await request(app)
      .get("/products")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    const response = await request(app)
      .put("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ _id: getProducts.body[0]._id, name: "", description: "description_test", price: 1234})
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  })

  it("modify product error required description", async () => {
    const getProducts = await request(app)
      .get("/products")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    const response = await request(app)
      .put("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ _id: getProducts.body[0]._id, name: "name_test", description: "", price: 1234})
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  })

  it("modify product error required price", async () => {
    const getProducts = await request(app)
      .get("/products")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    const response = await request(app)
      .put("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ _id: getProducts.body[0]._id, name: "name_test", description: "description_test", price: 0})
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  })

  it("modify product error authentication", async () => {
    const getProducts = await request(app)
      .get("/products")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    const response = await request(app)
      .put("/product")
      .set(
        "Authorization",
        "unknow_token_auth"
      )
      .send({ _id: getProducts.body[0]._id, name: "name_test", description: "description_test", price: 0})
    expect(response.statusCode).toEqual(401);
    expect(response.body).toHaveProperty("error");
  })
});
