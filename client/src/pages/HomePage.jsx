import "../App.css";
import React from "react";
// import HomeProducts from '../components/HomeProducts/HomeProducts'
import Product from '../components/Product/Product'
// import Searchbar from "../components/Searchbar/Searchbar";
import SearchShortcuts from "../components/SearchShortcuts/SearchShortcuts"

function HomePage(props) {


  return (
    <div className="App">
      <h1>Welcome to swaap</h1>

      <div className="searchShortcuts">
          <SearchShortcuts handleSearch={props.requestProducts} /> 
      </div>

      {props.products.map((product, index) => {
        return <Product refreshProducts={props.reloadUser} key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
}

export default HomePage;
