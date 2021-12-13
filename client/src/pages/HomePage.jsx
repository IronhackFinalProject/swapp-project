import "../App.css";
import React from "react";
// import HomeProducts from '../components/HomeProducts/HomeProducts'
import Product from '../components/Product/Product'
import Searchbar from "../components/Searchbar/Searchbar";

function HomePage(props) {
  console.log(props.products)
  return (
    <div className="App">
      <h1>Welcome to swaap</h1>    
      {props.products.map((product, index) => {
        return <Product key={index + product._id} user={props.user} product={product} />
      })}

      {/* <HomeProducts /> */}
    </div>
  );
}

export default HomePage;
