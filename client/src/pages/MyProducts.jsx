import React from "react";
import Product from "../components/Product/Product"
import { MYPRODUCTS } from "../utils/paths";
import SearchShortcuts from "../components/SearchShortcuts/SearchShortcuts"



const MyProducts = (props) => {


  // useEffect(() => {
  //   CREAR ESTADO MYPRODUCTSLLAMADA AXIOS A bd
  //   RESPONSE SALEN PRODUCTOS=SETMYPRODUCTS
  // }, []);



  const filteredProducts = props.products.filter((product) => {
    return product.publishedBy === props.user._id
    }
  )

  console.log(filteredProducts)

  return (
    
    <div>
      <h2>These are your products...</h2>

      <div className="searchShortcuts">
          <SearchShortcuts handleSearch={props.requestProducts} /> 
      </div>

      {filteredProducts.map((product, index) => {
        return <Product key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
};

export default MyProducts;
