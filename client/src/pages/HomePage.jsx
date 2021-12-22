import "../App.css";
// import HomeProducts from '../components/HomeProducts/HomeProducts'
import Product from '../components/Product/Product'

import SearchShortcuts from "../components/SearchShortcuts/SearchShortcuts"
import "./HomePage.css"
import Hero from "../images/shakeHero.jpg"
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../services/products";
import Searchbar from "../components/Searchbar/Searchbar";



function HomePage(props) {

  const [products, setProducts] = useState([])
  

  const requestProducts = useCallback((query) => {
    getProducts(query).then((res) => {
      setProducts(res.data.products);
    });
  }, [])

  useEffect(() => {
    requestProducts()
  }, [])




  return (
    <div className="App">

    <img className="Hero" src={Hero} alt="Heroimg" />
      {/* <h1>Welcome to swaap</h1> */}

      
      <div className="searchShortcuts">
          <SearchShortcuts handleSearch={requestProducts} /> 
          <Searchbar handleSearch={requestProducts} />
      </div>

      {products.map((product, index) => {
        return <Product refreshProducts={props.reloadUser} key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
}

export default HomePage;
