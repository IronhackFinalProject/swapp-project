import React from "react";


const MyProducts = (props) => {

  // console.log(props.products[0])

  return (
    
    <div>
      <h2>These are your products...</h2>
      <p>{props.products[0].description}</p>
      
      {/* <p>{props.products.body}</p> */}

    </div>
  );
};

export default MyProducts;
