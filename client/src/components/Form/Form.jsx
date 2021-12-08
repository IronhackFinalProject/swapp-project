import "../Form/Form.css";
import React from 'react';
import {useState} from 'react'

const Form = (props)=>{
    const [inputProduct, setInputProduct] = useState("");
    const [inputDesciption, setinputDesciption] = useState("");
    const [inputCategory, setInputCategory] = useState("TV, Audio y Foto");
    const [inputInterests, setInputInterests] = useState("TV, Audio y Foto");

    const addNewProduct = () => {
        const userCopy = {...props.userFromApp};
        userCopy.products.push({
            name: inputProduct,
            description: inputDesciption,
            category: inputCategory,
            interests: inputInterests,
        });
        props.setUserFromApp(userCopy)
    };

    return(
        <div>
            <h1>Crear producto</h1>

            <p>Producto</p>
            <input type="text" placeholder="Product name" maxLength={20} onChange={(event) => setInputProduct(event.target.value)}></input>

            <p>Descripción</p>
            <textarea type="text" style={{"height" : "100px", "width" : "200px"}} placeholder="Be concise, you just have 100 characters" maxLength={100} onChange={(event) => setinputDesciption(event.target.value)}></textarea>

            <p>Categoría</p>
            <select name="category" onChange={(event) => setInputCategory(event.target.value)}>
                <option value="TV, Audio y Foto">TV, Audio y Foto</option>
                <option value="Deporte y Ocio">Deporte y Ocio</option>
                <option value="Moda y accesorios">Moda y accesorios</option>
                <option value="Móviles y Telefonía">Móviles y Telefonía</option>
            </select>

            <p>¿Qué tipo de producto quieres?</p>
            <select name="interests" onChange={(event) => setInputInterests(event.target.value)}>
                <option value="TV, Audio y Foto">TV, Audio y Foto</option>
                <option value="Deporte y Ocio">Deporte y Ocio</option>
                <option value="Moda y accesorios">Moda y accesorios</option>
                <option value="Móviles y Telefonía">Móviles y Telefonía</option>
            </select>

            <button onClick={() => addNewProduct({})}>Crear producto</button>

        </div>
    );
};

export default Form;