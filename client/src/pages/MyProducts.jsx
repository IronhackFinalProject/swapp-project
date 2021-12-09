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
        return <Product key={index + product._id} product={product} />
      })}
      <p>{props.products[11].name}</p>
      <p>{props.products[11].description}</p>
      <p>{props.products[11].category}</p>
      <p>{props.products[11].interests}</p>

      {/* <Product /> */}

    </div>
  );
};

export default MyProducts;
