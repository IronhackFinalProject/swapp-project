import "./Product.css";
import React from 'react';
// import { setUserToken } from "../../utils/userToken";
import {useState} from 'react'
import { deleteProduct } from "../../services/products";
import { favProduct } from "../../services/products";
import favIcon from "../SearchShortcuts/icons/no_fav.png"
import { useNavigate, Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { deleteFav } from "../../services/products";
import unFavIcon from "../SearchShortcuts/icons/fav.png"





import { DeleteOutlined, TrophyOutlined, VideoCameraOutlined, UserOutlined, AlertOutlined } from "@ant-design/icons";
import {Avatar} from 'antd'
import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'

const Product = (props) => {
  const navigate = useNavigate();

  const { name, description, category, interests, picture, publishedName, _id, publishedBy, publishedCity } =
    props.product;
  const getCategory = () => {
    if (category === "TV, Audio y Foto") {
      return <><VideoCameraOutlined/></>;
    } else if (category === "Deporte y Ocio") {
      return <><TrophyOutlined /></>;
    } else if (category === "Moda y accesorios") {
      return "👕";
    } else if (category === "Móviles y Telefonía") {
      return "📱";
    } else {
      return "";
    }
  };

  const getBackground = () => {
    if (category === "TV, Audio y Foto") {
      return "1px solid #00e4ff";
    } else if (category === "Deporte y Ocio") {
      return "1px solid #2dff00";
    } else if (category === "Moda y accesorios") {
      return "1px solid #ff0000";
    } else if (category === "Móviles y Telefonía") {
      return "1px solid #2800ff";
    } else {
      return "";
    }
  };

  const getInterests = () => {
    if (interests === "TV, Audio y Foto") {
      return <><VideoCameraOutlined/></>;
    } else if (interests === "Deporte y Ocio") {
      return "🤸‍♂️";
    } else if (interests === "Moda y accesorios") {
      return "👕";
    } else if (interests === "Móviles y Telefonía") {
      return "📱";
    } else {
      return "";
    }
  };


  const handleDelete = () => {
     deleteProduct (_id)
     navigate(PATHS.HOMEPAGE)
  }

  const handleFav = () => {
    favProduct (_id,  props.refreshProducts)
 }

  const handleUnfav = () => {
    deleteFav (_id,  props.refreshProducts)
  }

//  const productPage = () => {
//   navigate(`/product/${_id}`)
// }

// const filteredProducts = props.products.filter((product) => {
//   return props.user.favoritos !== _id
//   }
// )


  return (
    <div className="productWrapper">
       {/* style={{ border: getBackground() }} */}
      <div className="Product">

        {/* {props.user ? 
           props.user._id === publishedBy ? 
           <button className="deleteBtn" onClick={() => handleDelete(_id)}>
            <DeleteOutlined />
          </button> 
          : ""
          
         : "" } */}

        <h5><><Avatar size="large" icon={<UserOutlined />} /></>{publishedName}</h5>

        <Link to={`/product/${_id}`}>
          <img className="productImg" src={picture} alt="ProductPicture" />
        </Link>

        <h3 className="productName">
        {name} 
        </h3>
        <h3 className="productCity">
        {publishedCity} 
        </h3>
        <h3>
            {!props.user?.favoritos.includes(_id) 
              ? <button className="favBtn" onClick={() => handleFav(_id)}><img src={favIcon} alt="favIcon" className="favIcon"/></button>
              :
              <button className="favBtn" onClick={() => handleUnfav(_id)}><img src={unFavIcon} alt="favIcon" className="favIcon"/></button>}
        </h3>

        {/* <p>{description}</p>
        <button className="categoryBtn">Category: {getCategory()}</button>
        <button className="categoryBtn">Interested in: {getInterests()}</button>
        
        <p>Share this item...</p>
        <>
        
        <TwitterShareButton 
        url={"https://twitter.com/intent/tweet"}
        title={"Swapp app"}>
          <TwitterIcon size={32} borderRadius={15}/>
        </TwitterShareButton>
        

        <FacebookShareButton
        url={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"}
        title={"Swapp app"}>
          <FacebookIcon size={32} borderRadius={15}/>
        </FacebookShareButton>

        <WhatsappShareButton
        url={"https://api.whatsapp.com/send?text=Swapp app"}
        >
        <WhatsappIcon size={32} borderRadius={15}/>
        </WhatsappShareButton>


        </> */}
        
      </div>
    </div>
  );
};

export default Product;