import "../App.css";
import Product from "../components/Product/Product";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProduct } from '../services/products.js'




function ProductDetails(props) {

  // const [user, setUser] = useState({}) //estoy intentando las props de user, pero no las del usuario loggeado sinó las de creador del roducto (publishedBy)
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

  return (
    <div className="App">
    { loading ? "loading" :
      <div>
        <h2>Detalles de {product.name}</h2>
        <img className="productImg" src={product.picture} alt="ProductPicture" />
        <h1>{product.description}</h1>
        <h1>{product.condition}</h1>
        <h1>{product.category}</h1>
        <h1>{product.interests}</h1>
        <h1>Este producto es del usuario {product.publishedBy.username}</h1>
        <h1>Este producto está en {product.publishedBy.city}</h1>

        {/* <h1>{props.user.name}</h1> */}
      </div>
    }
    </div>
  );
}

export default ProductDetails;
