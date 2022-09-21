const User = require("../models/user");
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password, street, city, state, pin } =
    req.body;
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    street,
    city,
    state,
    pin,
  });
  await newUser
    .save()
    .then(() => {
      res.status(201).send("User Created");
    })
    .catch((e) => console.log(e));
};

module.exports = registerUser;
