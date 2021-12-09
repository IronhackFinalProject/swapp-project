import "../Form/Form.css";
import React from 'react';
import {useState} from 'react'
import { createProduct } from "../../services/products";
import Axios from "axios"

const Form = (props)=>{
    const [inputProduct, setInputProduct] = useState("");
    const [inputDesciption, setinputDesciption] = useState("");
    const [inputCategory, setInputCategory] = useState("TV, Audio y Foto");
    const [inputInterests, setInputInterests] = useState("TV, Audio y Foto");
    // const [inputImage, setInputImage] = useState("")
    const [imageSelected, setImageSelected] = useState("")
    

    const handleSubmit = () => {

        const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset","gzjkizxz") 

    Axios.post("https://api.cloudinary.com/v1_1/swappapp/image/upload", formData).then((response)=> {console.log(response.data.secure_url)
    
    const product = 
        {
            publishedBy: props.user._id,
            name: inputProduct,
            description: inputDesciption,
            category: inputCategory,
            interests: inputInterests,
            picture: response.data.secure_url,
        };
        createProduct(product)
    })


        
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

            <input type="file"
            onChange={(event) => {
                setImageSelected(event.target.files[0])
            }} /> 

            <button onClick={() => handleSubmit()}>Crear producto</button>

        </div>
    );
};

export default Form;