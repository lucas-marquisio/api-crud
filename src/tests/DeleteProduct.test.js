const request = require("supertest");
const app = require("../app/server.js");

describe("delete product test", () => {

  it("delete product sucess", async () => {
    const product = {
      name: "product_test",
      description: "product_test",
      price: 1234,
    };
    const response = await request(app)
      .post("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ ...product });

    const id = response.body._id
    
    const responseDelete = await request(app)
      .delete(`/product/${id}`)
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    expect(responseDelete.statusCode).toEqual(200);
    expect(responseDelete.body).toHaveProperty(
      "message"
    );
  });

  it("delete product error authentication", async () => {
    const responseDelete = await request(app)
      .delete(`/product/id_unknow`)
      .set(
        "Authorization",
        "token_unkonw"
      )

    expect(responseDelete.statusCode).toEqual(401);
    expect(responseDelete.body).toHaveProperty(
      "error"
    );
  });

  it("delete product error", async () => {
    const responseDelete = await request(app)
      .delete(`/product/id_unknow`)
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )

    expect(responseDelete.statusCode).toEqual(400);
    expect(responseDelete.body).toHaveProperty(
      "error"
    );
  });

});
