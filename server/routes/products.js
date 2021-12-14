const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Product = require("../models/Product.model");
const Favorite = require("../models/Favoritos.model");
const User = require("../models/User.model");


//---------- CREATE PRODUCT ----------------------------------------------------------------------------------------------------------------
router.post("/create", isLoggedIn, async (req, res) => { 
// console.log(req.body)
// console.log(req.user)
const {name, description, category, interests, picture, publishedBy, publishedName} = req.body;
console.log(req.body)
  const dataToUpload = {
    publishedBy,
    publishedName,
    name,
    description,
    category,
    interests,
    picture,
  }

  try {
    const createProduct = await Product.create(dataToUpload)

    await User.findByIdAndUpdate(req.user._id,
      {$push: {products: createProduct._id}},);
    res.status(201).json(createProduct)
    // res.json("ok")

  } catch (err) {
      console.log(err.message)
  }

});


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



// router.post("/favorites", isLoggedIn, async (req, res) => { 
//   // console.log(req.body)
//   // console.log(req.user)
//   const {name, description, category, interests, picture, publishedBy, publishedName} = req.body;
//   console.log(req.body)
//     const dataToUpload = {
//       publishedBy,
//       publishedName,
//       name,
//       description,
//       category,
//       interests,
//       picture,
//     }
  
//     try {
//       const favProduct = await Favorite.create(dataToUpload)
  
//       await User.findByIdAndUpdate(req.user._id,
//         {$push: {favoritos: favProduct._id}},);
//       res.status(201).json(favProduct)
//       // res.json("ok")
  
//     } catch (err) {
//         console.log(err.message)
//     }
  
//   });

module.exports = router;