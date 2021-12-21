import "../Product/Product.css";
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
// import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'

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
     deleteProduct (_id, props.refreshProducts)
    //  navigate(PATHS.HOMEPAGE)
  }

  const handleFav = () => {
    favProduct (_id,  props.refreshProducts)
 }

  const handleUnfav = () => {
    deleteFav (_id,  props.refreshProducts)
  }




  return (
    <div className="productWrapper">
       {/* style={{ border: getBackground() }} */}
      <div className="Product">


        <button className="deleteBtn" onClick={() => handleDelete(_id)}>
            <DeleteOutlined />
        </button> 


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
            {props.user ?
              props.user._id !== publishedBy ? 
              !props.user?.favoritos.includes(_id) 
              ? <button className="favBtn" onClick={() => handleFav(_id)}><img src={favIcon} alt="favIcon" className="favIcon"/></button>
              :
              <button className="favBtn" onClick={() => handleUnfav(_id)}><img src={unFavIcon} alt="favIcon" className="favIcon"/></button>
            : ""
            : ""}
        </h3>

        
      </div>
    </div>
  );
};

export default Product;