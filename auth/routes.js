const router = require("express").Router();
const registerUser = require("./register");
router.post("/register", registerUser);
module.exports = router;
