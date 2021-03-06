import "../App.css";
import Product from "../components/Product/Product"
import SearchShortcuts from "../components/SearchShortcuts/SearchShortcuts"
import {getfavoriteProducts} from '../services/products'
import {useState, useEffect} from 'react'

const Favorites = (props) => {

  const [favorites, setFavorites] = useState([])
  const {user} = props

  const getFavorites = async () => {
      const response = await getfavoriteProducts(user._id)
      setFavorites(response.data?.favoritos)  
  }

  useEffect(()=> { //cuando se monta el componente
    getFavorites()
    // refreshProducts()
  },[])


  return (
    <div className="App">
      <h1 className="PagesTitle">These are your favorite products</h1>
      {favorites.map((product, index) => {
        return <Product refreshProducts={getFavorites} key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
}

export default Favorites;
