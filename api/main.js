const express = require("express");
const app = express();
const cors = require("cors");

const { connectToDatabase } = require("./database");
const { mongoDb_ConnectionString, mongoDb_dbName } = require("./constant");

const userController = require("./controllers/user.controller");

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("API is running.");
});

app.use("/user", userController);
/* app.use("/business", userController);
app.use("/appointment", userController);
app.use("/service", userController); */

app.listen(3001, () => {
  console.log("Api running on port 3001");
  connectToDatabase(mongoDb_ConnectionString, mongoDb_dbName, true);
});
