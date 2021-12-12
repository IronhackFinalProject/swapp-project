import "./Product.css";
import React from 'react';
// import { setUserToken } from "../../utils/userToken";
import {useState} from 'react'
import { deleteProduct } from "../../services/products";



const Product = (props)=>{
  // console.log(user)
    const [user, setUser] = useState("");

    const {name, description, category, interests, picture, publishedName, publishedBy, _id} = props.product
    // console.log(_id)
    const getCategory = () => {
        if(category === "TV, Audio y Foto"){
          return "📽"
        } else if(category === "Deporte y Ocio"){
          return "🤸‍♂️"
        } else if (category === "Moda y accesorios"){
          return "👕"
        } else if (category === "Móviles y Telefonía"){
            return "📱"
        } else {
        return "";
        };
    }
    
    const getBackground = () => {
        if(category === "TV, Audio y Foto"){
          return "rgb(210, 230, 255)"
        } else if(category === "Deporte y Ocio"){
          return "#daffd2"
        } else if (category === "Moda y accesorios"){
          return "#ffd2d2"
        } else if (category === "Móviles y Telefonía"){
            return "#d9d2ff"
        } else {
        return "";
        };
    }

    const getInterests = () => {
        if(interests === "TV, Audio y Foto"){
          return "📽"
        } else if(interests === "Deporte y Ocio"){
          return "🤸‍♂️"
        } else if (interests === "Moda y accesorios"){
          return "👕"
        } else if (interests === "Móviles y Telefonía"){
            return "📱"
        } else {
        return "";
        };
    }

    const deleteProductAndUpdate = (productId) => {
      // console.log(props.user.products);
            const filteredProducts = props.user.products.filter((product) => {
        return props.user.products !== _id;
      });
      console.log(filteredProducts)
    }

    // const deleteProductAndUpdate = (productId) => {
    //   const filteredProducts = props.user.products.filter((product) => {
    //     return productId !== product._id;
    //   });

    //   const copyOfUser = {...user}
    //   copyOfUser.products = filteredProducts
    //   setUser(copyOfUser);
    //   // deleteProduct(copyOfUser)
    // };

    // const filteredProducts = props.products.filter((product) => {
    //   return product.publishedBy === props.user._id
    //   }
    // )
    

    return (
        <div className="Product" style={{backgroundColor: getBackground()}}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>El usuario {publishedName} tiene un objecto de la categoría {getCategory()} y está interesado en cambiarlo por otro de {getInterests()}</p>
            {/* {console.log(user)} */}
            <img style={{width: "80px"}} src={picture} alt="josellorón" />
            {/* <button onClick={()=>console.log(_id)}>Borrar</button> */}
            <button onClick={()=>deleteProductAndUpdate()}>Borrar</button>
        </div>
    );
};

export default Product;