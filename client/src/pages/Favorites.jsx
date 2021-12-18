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
      // esto nos devolvería un array de favoritos de ese usuario
      // este array lo tenemos que guardar en algun lado
      //por eso el useState
      //usamos la función setter
      setFavorites(response.data.favoritos)  
      //ahora ya tenemos el array de favoritos en el estado local
      //podemos mapear su contenido
  }

  useEffect(()=> { //cuando se monta el componente
    getFavorites()
    //llamada a la api a ese endpoint  --> no se como hacer 

    //te creas una ruta en el backend que coincida con la ruta que acabamos de definir en el frontend
    //el backend nos devuelve el array de favoritos
  },[])


  return (
    <div className="App">
      <h2>FAVORITES</h2>
      {favorites.map((product, index) => {
        return <Product key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
}

export default Favorites;
