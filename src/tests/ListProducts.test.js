const request = require("supertest");
const app = require("../app/server.js");

describe("list products test", () => {
  it("list product sucess", async () => {
    const response = await request(app)
      .get("/products")
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ0LS0tYWFzZC1kYXMtZGFzLWQiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluIiwiX192IjowfQ.Y4L9VeSKF3m4MM8XZAmJVFqDHJ9ly_y45A7u1wgYIWw"
      )
    expect(response.statusCode).toEqual(200);
  });

  it("list product error authentication", async () => {
    const response = await request(app)
      .get("/products")
      .set("Authorization", "")
    expect(response.statusCode).toEqual(401);
    expect(response.body).toHaveProperty("error");
  });

});
