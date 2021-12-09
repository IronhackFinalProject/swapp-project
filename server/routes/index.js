const router = require("express").Router();
const authRoutes = require("./auth");
const productsRoutes = require("./products");
const Product = require("../models/Product.model")

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.status(200).json({ products })
  } catch (err) {
    console.log("err msg")
  }
});

//todo empieza con /api
router.use("/auth", authRoutes);
router.use("/products", productsRoutes);



module.exports = router;
