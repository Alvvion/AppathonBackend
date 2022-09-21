require("dotenv").config();
const app = require("express")();
const { json } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./auth/routes");
app.use(cors());
mongoose
  .connect(
    `mongodb+srv://${process.env.MongoUser}:${process.env.MongoPasswd}@appathon.0hrxhx5.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(`Error Found: ${e}`);
  });

app.use(json());

app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server connected at http://localhost:${process.env.PORT}`);
});
