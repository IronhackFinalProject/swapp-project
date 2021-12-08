const router = require("express").Router();
const axios = require("axios");
const {isLoggedIn} = require("../middleware/isLoggedIn");
const Product = require("../models/Product.model");
const User = require("../models/User.model");


/* GET favorites page */
router.get("/", isLoggedIn, async (req, res, next) => {

  const currUser = await User.findById(req.session.loggedUser._id).populate('pics')

  res.render("./favorites.hbs", {pics: currUser.pics} );
});


//---------- CREATE FAVORITE PICS BY id ----------------------------------------------------------------------------------------------------------------
router.post("/createproduct/:id", async (req, res) => { 

  const axiosCall = await axios(`mongodb+srv://SwappAdmin:SwappersToThePower@cluster0.clyvc.mongodb.net/swapp?retryWrites=true&w=majority`)
  const infoFromProduct = axiosCall.data

  const dataToUpload = {
    name: infoFromProduct.name,
    description: infoFromProduct.description,
    category: infoFromProduct.category,
    interests: infoFromProduct.interests,
    picture: infoFromProduct.picture,

  }

    const createProduct = await Product.create(dataToUpload)

    await User.findByIdAndUpdate(req.session.loggedUser._id,
      {$push: {products: createProduct._id}},);

    res.redirect(`/products`)
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

// module.exports = router;