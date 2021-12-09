const router = require("express").Router();
const authRoutes = require("./auth");
const productsRoutes = require("./products");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//todo empieza con /api
router.use("/auth", authRoutes);
router.use("/products", productsRoutes);



module.exports = router;
