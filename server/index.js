const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./controller/user");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("server running");
});
