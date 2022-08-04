const router = require("express").Router();
const User = require("../models/User.model");
const registrationRoutes = require("./registration.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/registration", registrationRoutes);

module.exports = router;
