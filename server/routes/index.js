const router = require("express").Router();
const authRoutes = require("./auth");
const productsRoutes = require("./products");
const Product = require("../models/Product.model");

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    const query = req.query.search;
    let products;

    if (!!query) {
      products = await Product.find( !!query ? {
        $or: [
          { name: { $regex: query } },
          { category: { $regex: query } },
          { interests: { $regex: query } },
          { description: { $regex: query } },
        ],
      } : {});
    } else {
      products = await Product.find({});
    }

    console.log(products);
    res.status(200).json({ products });
  } catch (err) {
    console.log("err msg");
  }

  // 1. Obtener query param 'search'
  // 2. Buscar en DB por query param 'search'
  // 3. Devolver los resultados
});

//todo empieza con /api
router.use("/auth", authRoutes);
router.use("/products", productsRoutes);


module.exports = router;
