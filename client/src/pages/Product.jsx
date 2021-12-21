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
            <h2>{product.name}</h2>
            <>
            <Link to={PATHS.CHATPROFILE} className="nav__projectName">
              <button className="btnChat">
                  <MessageOutlined className="detailsChat" />
                 Chat
              </button></Link>
            </>

            <p>{product.publishedBy.city}</p>
            <h3>
              {props.user ? (
                props.user._id === product.publishedBy ? (
                  !props.user?.favoritos.includes(product._id) ? (
                    <button
                      className="favBtn"
                      onClick={() => handleFav(product._id)}
                    >
                      <img src={favIcon} alt="favIcon" className="favIcon" />
                    </button>
                  ) : (
                    <button
                      className="favBtn"
                      onClick={() => handleUnfav(product._id)}
                    >
                      <img src={unFavIcon} alt="favIcon" className="favIcon" />
                    </button>
                  )
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </h3>
            <div>
              <p>
                <strong>About:</strong>
              </p>
              <p>{product.description}</p>
            </div>
            <p>
              <strong>Product condition:</strong> {product.condition}
            </p>
            <p>
              <strong>Product's category:</strong> {product.category}
            </p>
            <p>
              {product.publishedBy.username} is interested in swapping this
              product for an item of the category {product.interests}
            </p>
            <div class="user">
              <p>
                This user has a total of{" "}
                <strong>{product.publishedBy.products.length} products</strong>{" "}
                to swapp.
              </p>
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
      ;
    </div>
  );
}

export default ProductDetails;