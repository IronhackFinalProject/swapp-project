import "../App.css";
import Product from "../components/Product/Product";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProduct } from '../services/products.js'




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
      <h2>Detalles de {product.name}</h2>
      <img className="productImg" src={product.picture} alt="ProductPicture" />
      <h1>{product.description}</h1>
      <h1>{product.condition}</h1>
      <h1>{product.category}</h1>
      <h1>{product.interests}</h1>
      <h1>Este producto es del usuario {product.publishedBy}</h1>
      {/* <h1>{props.user.name}</h1> */}


    </div>
  );
}

export default ProductDetails;
