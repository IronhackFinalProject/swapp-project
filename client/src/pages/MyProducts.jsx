import React from "react";
import MyProductCard from "../components/MyProductCard/MyProductCard"
import { MYPRODUCTS } from "../utils/paths";
import SearchShortcuts from "../components/SearchShortcuts/SearchShortcuts"
import {useState, useEffect} from 'react'
import {getMyProductsDB} from '../services/products'
import './MyProducts.css'





const MyProducts = (props) => {

  // const filteredProducts = props.products.filter((product) => {
  //   return product.publishedBy === props.user._id
  //   }
  // )


  const [myProducts, setMyProducts] = useState([])
  const {user} = props

  const getMyProducts = async () => {
    const response = await getMyProductsDB(user._id)
      setMyProducts(response.data?.products)
      }

  useEffect(() => {
    getMyProducts()
  }, [])
  

  

  return (
    
    <div>
      {/* <h2>You can even sort them by category</h2> */}

      {/* <div className="searchShortcuts">
          <SearchShortcuts handleSearch={props.requestProducts} /> 
      </div> */}
      <h1 className="PagesTitle">Your products to swapp</h1>


      {myProducts.map((product, index) => {
        return <MyProductCard refreshProducts={getMyProducts} key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
};

export default MyProducts;
