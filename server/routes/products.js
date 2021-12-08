const router = require("express").Router();
const {isLoggedIn} = require("../middleware/isLoggedIn");
const Product = require("../models/Product.model");
const User = require("../models/User.model");


//---------- CREATE FAVORITE PICS BY id ----------------------------------------------------------------------------------------------------------------
router.post("/create", async (req, res) => { //falta el isLoggedIn, !!!!  <======  <======  <======  <======  <======  
console.log(req.body)
const {name, description, category, interests, picture} = req.body;

  const dataToUpload = {
    name,
    description,
    category,
    interests,
    picture,
  }

  try {
    const createProduct = await Product.create(dataToUpload)

    await User.findByIdAndUpdate(req.session.loggedUser._id,
      {$push: {products: createProduct._id}},);
    res.status(201).json(createProduct.data)
    // res.json("ok")

  } catch (err) {
console.log(err.message)

  }

});


//---------- DELETE FAVORITE PICS BY id ----------------------------------------------------------------------------------------------------------------
// router.post("/delete/:id", async (req, res) => { 
  
//     try{
//         await Pic.findByIdAndDelete(req.params.id, {new: true})
//         await User.findByIdAndUpdate(req.session.loggedUser._id, {$pull: {pics: req.params.id}},);
//     }catch(err){
//       console.log(err)
//     }
//     res.redirect(`/favorites`)
// });

module.exports = router;