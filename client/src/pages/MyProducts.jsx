import React from "react";
import Product from "../components/Product/Product"


const MyProducts = (props) => {

  const filteredProducts = props.products.filter((product) => {
    return product.publishedBy === props.user._id
    }
  )

  console.log(filteredProducts)

  return (
    
    <div>
      <h2>These are your products...</h2>
      {filteredProducts.map((product, index) => {
        return <Product key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
};

export default MyProducts;
