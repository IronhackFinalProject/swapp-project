import "./ProductDetails.css";
import Product from "../components/Product/Product";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProduct } from '../services/products.js'
import { MessageOutlined } from "@ant-design/icons";
import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton} from 'react-share'
import { deleteFav } from "../services/products";
import unFavIcon from "../components/SearchShortcuts/icons/fav.png"
import { favProduct } from "../services/products";
import favIcon from "../components/SearchShortcuts/icons/no_fav.png"
import * as PATHS from "../utils/paths";
import { DeleteOutlined, TrophyOutlined, VideoCameraOutlined, UserOutlined, AlertOutlined, HeartOutlined, HeartTwoTone } from "@ant-design/icons";


// import { ProductDetailsCard } from "../components/ProductDetails/ProductDetails"



function ProductDetails(props) {

  const [product, setProduct] = useState({})
  const { productId } = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOneProduct(productId)
          .then(response => {
            setProduct(response.data)
            setLoading(false)
          })
          .catch(err => {
            setLoading(false)
            console.log(err)
          })
  }, [productId])
 console.log(product)

 const handleFav = () => {
  favProduct (product._id,  props.refreshProducts, props.reloadUser)
}

const handleUnfav = () => {
  deleteFav (product._id,  props.refreshProducts, props.reloadUser)
}


const getInterests = () => {
  if (product.interests === "Tv, Audio & Photo") {
    return <><VideoCameraOutlined/></>;
  } else if (product.interests === "Sports") {
    return "🤸‍♂️";
  } else if (product.interests === "Fashion") {
    return "👕";
  } else if (product.interests === "Smartphones") {
    return "📱";
  } else {
    return "";
  }
};


  return (
    <div className="productDetails-container">
      {loading ? (
        "loading"
      ) : (
        <div className="card">
          <div className="card-header">
            <img
              className="productImg"
              src={product.picture}
              alt="ProductPicture"
            />
          </div>
          
          <div className="card-body">
          <div className="titleDetailChatBtnWrapper">
            <h1 className="titleDetailsProduct">{product.name}</h1>
            <>
            <Link to={PATHS.CHATPROFILE} className="nav__projectName">
              <button className="btnChat">
                  <MessageOutlined className="detailsChat" />
                 Chat
              </button></Link>
            </>
            </div>

            <h1 className="cityDetailsProduct">{product.publishedBy.city}</h1>
            {/* <h3>
              {props.user._id !== product.publishedBy ? (
                !props.user?.favoritos.includes(props.user._id) ? (
                <button className="favBtn" onClick={() => handleFav(props.user._id)}>
                  <HeartOutlined className="favIcon" />
                </button>
              ) : (
                <button className="favBtn" onClick={() => handleUnfav(props.user._id)}>
                  <HeartTwoTone twoToneColor="#eb2f96" className="unfavIcon" />
                </button>
              )
            ) : 
              ""}
            </h3> */}
            <div className="cardDataContainer">
              {/* <p>
                <strong>About:</strong>
              </p> */}
                <h3>{product.description}</h3>
                <h3><span className="cardData">Product condition:</span> {product.condition}</h3>
                <h3><span className="cardData">Product's category:</span> {product.category}</h3>
                <h3><span className="cardData">{product.publishedBy.username}</span> is interested in swapping this
                  product for an item of the <span className="cardData">{product.interests}</span> {getInterests()} category.
                </h3>
                <div class="user">
                  <h3 className="userTotalProducts">
                    This user has a total of <span className="cardData">{product.publishedBy.products.length} products</span> to swapp.
                  </h3>
                </div>
            </div>

            
              <p>Share this item...</p>

          <div className="ShareBtnsWrapper">
              <div className="TwitterShare">
                <TwitterShareButton
                  url={"https://twitter.com/intent/tweet"}
                  title={"Swapp app"}
                >
                  <TwitterIcon size={32} borderRadius={15} />
                </TwitterShareButton>
              </div>

              <div className="FacebookShare">
                <FacebookShareButton
                  url={
                    "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  }
                  title={"Swapp app"}
                >
                  <FacebookIcon size={32} borderRadius={15} />
                </FacebookShareButton>
              </div>

              <div className="WhatsappShare">
                <WhatsappShareButton
                  url={"https://api.whatsapp.com/send?text=Swapp app"}
                >
                  <WhatsappIcon size={32} borderRadius={15} />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default ProductDetails;