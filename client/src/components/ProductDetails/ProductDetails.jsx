// import "./Product.css";
// import Product from "..//Product/Product";
// import { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { getOneProduct } from '../services/products.js'
// import { DeleteOutlined, TrophyOutlined, VideoCameraOutlined, UserOutlined, AlertOutlined } from "@ant-design/icons";
// import {Avatar} from 'antd'
// import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'
// import { deleteFav } from "../services/products";
// import unFavIcon from "..//SearchShortcuts/icons/fav.png"
// import { favProduct } from "../services/products";
// import favIcon from "../SearchShortcuts/icons/no_fav.png"


// const ProductDetailsCard = (props) => {


// const handleFav = () => {
//     favProduct (product._id,  props.refreshProducts, props.reloadUser)
//   }
  
//   const handleUnfav = () => {
//     deleteFav (product._id,  props.refreshProducts, props.reloadUser)
//   }

// return (
// <div class="card">
// <div class="card-header">
//   <img className="productImg" src={product.picture} alt="ProductPicture" />
// </div>
// <div class="card-body">
//   <h2>{product.name}</h2>
//   <h3>
//       {!props.user?.favoritos.includes(product._id) 
//         ? <button className="favBtn" onClick={() => handleFav(product._id)}><img src={favIcon} alt="favIcon" className="favIcon"/></button>
//         :
//         <button className="favBtn" onClick={() => handleUnfav(product._id)}><img src={unFavIcon} alt="favIcon" className="favIcon"/></button>}
//   </h3>
//   <p><strong>About:</strong> {product.description}</p>
//   <p><strong>Product condition:</strong> {product.condition}</p>
//   <p><strong>Product's category:</strong> {product.category}</p>
//   <p>{product.publishedBy.username} is interested in swapping this product for an item of the category {product.interests}</p>
//   <div class="user">
//     <p>This user is located in <strong>{product.publishedBy.city}</strong> and he has a total of <strong>{product.publishedBy.products.length} products</strong> to swapp.</p>
//   </div>

// <div>
//     <p>Share this item...</p>
  
//         <TwitterShareButton 
//         url={"https://twitter.com/intent/tweet"}
//         title={"Swapp app"}>
//           <TwitterIcon size={32} borderRadius={15}/>
//         </TwitterShareButton>
        
//         <FacebookShareButton
//         url={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"}
//         title={"Swapp app"}>
//           <FacebookIcon size={32} borderRadius={15}/>
//         </FacebookShareButton>

//         <WhatsappShareButton
//         url={"https://api.whatsapp.com/send?text=Swapp app"}
//         >
//         <WhatsappIcon size={32} borderRadius={15}/>
//         </WhatsappShareButton>

//   </div>
// </div>
// </div>
//   );
// };

// export default ProductDetailsCard;