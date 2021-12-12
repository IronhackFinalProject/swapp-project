const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Product = require("../models/Product.model");
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
router.post("/delete", isLoggedIn, async (req, res) => { 
  
    try{
        await Product.findByIdAndDelete(req.body.id, {new: true})
        await User.findByIdAndUpdate(req.user._id, {$pull: {products: req.body.id}},);
        res.status(201).json(deleteteProduct)
    }catch(err){
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