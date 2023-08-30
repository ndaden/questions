const express = require("express");
const UserModel = require("../schemas/user.schema");
const app = express();

app.get("/", async (req, resp) => {
  try {
    const users = await UserModel.find()
      .populate("roles", "name -_id")
      .select("-password -__v -email._id")
      .lean();
    resp.send(users);
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.post("/create", async (req, resp) => {
  try {
    const user = new UserModel(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong" + e);
  }
});

module.exports = app;
