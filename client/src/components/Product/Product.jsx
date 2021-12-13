import "./Product.css";
import React from 'react';
// import { setUserToken } from "../../utils/userToken";
import {useState} from 'react'
import { deleteProduct } from "../../services/products";


import { DeleteOutlined, TrophyOutlined, VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import {Avatar} from 'antd'
import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'

const Product = (props) => {
  // console.log(user)
  const { name, description, category, interests, picture, publishedName, _id } =
    props.product;
  // const {username, password} = paella.user

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
      return "rgb(210, 230, 255)";
    } else if (category === "Deporte y Ocio") {
      return "#daffd2";
    } else if (category === "Moda y accesorios") {
      return "#ffd2d2";
    } else if (category === "Móviles y Telefonía") {
      return "#d9d2ff";
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



  const deleteProductAndUpdate = (productId) => {
    // console.log(props.user.products);
          const filteredProducts = props.user.products.filter((product) => {
      return props.user.products !== _id;
    });
    console.log(filteredProducts)
  }




  return (
    <div className="productWrapper">
      <div className="Product" style={{ backgroundColor: getBackground() }}>
      <button className="deleteBtn" onClick={() => deleteProductAndUpdate(_id)}>
          <DeleteOutlined />
        </button>
        <h5><><Avatar size="large" icon={<UserOutlined />} /></>    {publishedName}</h5>
        <img className="productImg" src={picture} alt="josellorón" />
        <h3>{name}</h3>
        <p>{description}</p>
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


        </>
        
        
      </div>
    </div>
  );
};

export default Product;