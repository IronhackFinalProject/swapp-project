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
// import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'

const Product = (props) => {
  const navigate = useNavigate();

  const { name, lastname, username, city, products, _id } =
    props.user;





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