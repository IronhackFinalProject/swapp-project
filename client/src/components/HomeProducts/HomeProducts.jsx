import "./HomeProducts.css";
import React from 'react';

const Product = ()=>{
  // console.log(user)
    // const {name, description, category, interests, picture, publishedName} = props.product
    // // const {username, password} = paella.user

    // const getCategory = () => {
    //     if(category === "TV, Audio y Foto"){
    //       return "📽"
    //     } else if(category === "Deporte y Ocio"){
    //       return "🤸‍♂️"
    //     } else if (category === "Moda y accesorios"){
    //       return "👕"
    //     } else if (category === "Móviles y Telefonía"){
    //         return "📱"
    //     } else {
    //     return "";
    //     };
    // }
    
    // const getBackground = () => {
    //     if(category === "TV, Audio y Foto"){
    //       return "rgb(210, 230, 255)"
    //     } else if(category === "Deporte y Ocio"){
    //       return "#daffd2"
    //     } else if (category === "Moda y accesorios"){
    //       return "#ffd2d2"
    //     } else if (category === "Móviles y Telefonía"){
    //         return "#d9d2ff"
    //     } else {
    //     return "";
    //     };
    // }

    // const getInterests = () => {
    //     if(interests === "TV, Audio y Foto"){
    //       return "📽"
    //     } else if(interests === "Deporte y Ocio"){
    //       return "🤸‍♂️"
    //     } else if (interests === "Moda y accesorios"){
    //       return "👕"
    //     } else if (interests === "Móviles y Telefonía"){
    //         return "📱"
    //     } else {
    //     return "";
    //     };
    // }
    

    // return (
    //     <div className="Product" style={{backgroundColor: getBackground()}}>
    //         <h3>{name}</h3>
    //         <p>{description}</p>
    //         <p>El usuario {publishedName} tiene un objecto de la categoría {getCategory()} y está interesado en cambiarlo por otro de {getInterests()}</p>
    //         {/* {console.log(user)} */}
    //         <img style={{width: "80px"}} src={picture} alt="josellorón" />
    //         <button onClick={()=>props.funcionBorrar(name)}>Borrar</button>
    //     </div>
    // );

        return (
        <div className="HomeProducts" style={{}}>
            <h3>{}</h3>
            <p>{}</p>
            <p>El usuario {} tiene un objecto de la categoría {} y está interesado en cambiarlo por otro de {}</p>
            {/* {console.log(user)} */}
            <img style={{width: "80px"}}  alt="josellorón" />
            {/* <button onClick={()=>props.funcionBorrar()}>Borrar</button> */}
        </div>
    );
};

export default Product;