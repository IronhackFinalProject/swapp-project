import "../App.css";
import Product from "../components/Product/Product";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProduct } from '../services/products.js'
import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'
import {MessageOutlined} from "@ant-design/icons"
import "./productDetails.css"
import * as PATHS from "../../src/utils/paths"



function ProductDetails(props) {

  // const [user, setUser] = useState({}) //estoy intentando las props de user, pero no las del usuario loggeado sinó las de creador del roducto (publishedBy)
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    getOneProduct(productId)
          .then(response => setProduct(response.data))
          .catch(err => console.log(err))
  }, [productId])


  return (
    <div className="App">
      <h3>{product.publishedName}
      <Link to={PATHS.CHATPROFILE} className="nav__projectName"><button className="chatUser">Chat<MessageOutlined /></button></Link>
      </h3>
      <img className="productImg" src={product.picture} alt="ProductPicture" />
      <h2>{product.name}</h2>
      <h4>Category: {product.category}</h4>
      <p>{product.description}</p>
      <h4>Condition: {product.condition}</h4>
      
      <h3>Want to Swapp for {product.interests} item</h3>
    
      {/* <h1>{props.user.name}</h1> */}
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
  );
}

export default ProductDetails;
