const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Product = require("../models/Product.model");
const Favorite = require("../models/Favoritos.model");
const User = require("../models/User.model");


//---------- CREATE PRODUCT ----------------------------------------------------------------------------------------------------------------
router.post("/create", isLoggedIn, async (req, res) => { 

const {name, description, category, interests, picture, publishedBy, publishedName, condition} = req.body;

  const dataToUpload = {
    publishedBy,
    publishedName,
    name,
    description,
    category,
    interests,
    picture,
    condition,
  }

  try {
    const createProduct = await Product.create(dataToUpload)

    await User.findByIdAndUpdate(req.user._id,
      {$push: {products: createProduct._id}},);
    res.status(201).json(createProduct)
  } catch (err) {
      res.status(400).json(err.errors)
  }

});


//---------- MODIFY PRODUCT -----------------------------( WORK IN PROGRESS )-----------------------------------------------------------------------------------
// router.patch("/update/:id_product", isLoggedIn, async (req, res) => { 

//   const { name, description, category, interests, picture, publishedBy, publishedName, condition } = req.body;
  
//   const dataToUpload = {
//     publishedBy,
//     publishedName,
//     name,
//     description,
//     category,
//     interests,
//     picture,
//     condition,
//   }
  
//     try {
//      const product = await Product.findByIdAndUpdate(req.params.id_product, dataToUpload, {new: true})
//      res.status(201),json(product)
//     } catch (err) {
//         console.log(err.message)
//     }
// });
//---------- MODIFY PRODUCT -----------------------------( WORK IN PROGRESS )-----------------------------------------------------------------------------------



//---------- DELETE PRODUCT ----------------------------------------------------------------------------------------------------------------
router.delete("/:id", isLoggedIn, async (req, res) => { 
  console.log(req.params.id)
    try{
        await Product.findByIdAndDelete(req.params.id, {new: true})
        await User.findByIdAndUpdate(req.user._id, {$pull: {products: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});


//---------- PRODUCT TO FAVORITES ------------------------------------------------------------------------------------------------------------
router.post("/favorites/:id", isLoggedIn, async (req, res) => { 
  console.log(req.params.id)
    try{
        // await Product.findByIdAndUpdate(req.params.id, {new: true})
        await User.findByIdAndUpdate(req.user._id, {$push: {favoritos: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});


router.get("/favorites/:id", isLoggedIn, async (req, res) => {
  console.log(req.params)
  try{
    const userFromDB = await User.findById(req.params.id).populate("favoritos")
    res.status(200).json({favoritos: userFromDB.favoritos})
  }catch(err){
    console.log(err.message)
  }
})

//---------- Delete Favorites from User ------------------------------------------------------------------------------------------------------------
router.delete("/:id", isLoggedIn, async (req, res) => { 
  console.log(req.params.id)
    try{
        await User.findByIdAndUpdate(req.user._id, {$pull: {favoritos: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});




//---------- PRODUCT DETAILS PAGE ------------------------------------------------------------------------------------------------------------

router.get("/getOneProduct/:product_Id", (req, res) => {
const id = req.params.product_Id
  Product
    .findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


module.exports = router;