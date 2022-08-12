const request = require("supertest");
const app = require("../app/server.js");

describe("Add product test", () => {
  it("add product sucess", async () => {
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
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty(
      "_id",
      "_refererId",
      "name",
      "description",
      "price"
    );
  });

  it("add product error authentication", async () => {
    const product = {
      name: "product_test",
      description: "product_test",
      price: 1234,
    };
    const response = await request(app)
      .post("/product")
      .set("Authorization", "")
      .send({ ...product });
    expect(response.statusCode).toEqual(401);
    expect(response.body).toHaveProperty("error");
  });

  it("error name required", async () => {
    const product = {
      name: "",
      description: "product_test",
      price: 1,
    };
    const response = await request(app)
      .post("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ ...product });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  });

  it("error description required", async () => {
    const product = {
      name: "product_test",
      description: "",
      price: 1,
    };
    const response = await request(app)
      .post("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ ...product });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  });

  it("error price required", async () => {
    const product = {
      name: "product_test",
      description: "product_test",
      price: 0,
    };
    const response = await request(app)
      .post("/product")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
      .send({ ...product });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("error");
  });
});
