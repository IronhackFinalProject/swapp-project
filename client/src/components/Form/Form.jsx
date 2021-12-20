import "./Form.css";
import React from 'react';
import {useState} from 'react'
import { createProduct } from "../../services/products";
import Axios from "axios"
import * as PATHS from "../../utils/paths";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'  // Pruebas Toastify
import 'react-toastify/dist/ReactToastify.css';         // Pruebas Toastify





const Form = (props)=>{
    const [inputProduct, setInputProduct] = useState("");
    const [inputDesciption, setinputDesciption] = useState("");
    const [inputCategory, setInputCategory] = useState("TV, Audio y Foto");
    const [inputInterests, setInputInterests] = useState("TV, Audio y Foto");
    // const [inputImage, setInputImage] = useState("")
    const [imageSelected, setImageSelected] = useState("")
    const [inputCondition, setInputCondition] = useState("New");


    const navigate = useNavigate();

    const [err, setErr] = useState({})


    const handleSubmit = () => {

    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset","gzjkizxz") 

    Axios.post("https://api.cloudinary.com/v1_1/swappapp/image/upload", formData)
        .then(response => {
            const product = {
                publishedBy: props.user._id,
                publishedName: props.user.username,
                publishedCity: props.user.city,
                name: inputProduct,
                description: inputDesciption,
                category: inputCategory,
                interests: inputInterests,
                picture: response.data.secure_url,
                condition: inputCondition,
            };
            createProduct(product)
                .then(() => {
                    setTimeout(()=>{ navigate(PATHS.MYPRODUCTS) }, 3000);
                })
                .catch(err => {
                    setErr(err.response.data)
                    console.log( err.response.data )
                })
        })   
        .catch(err => {
            setErr({
                img: {
                    message: "You have to include an image to your product!"
                }
            })
        })
       
    };

   // const para TOAST -- testing
   const notify = () => toast.info("Uploading your item...", {
    position:toast.POSITION.BOTTOM_CENTER
   })

    const handleFocus = (e) => {
        const newErr = {
            ...err, 
            [e.target.name]:null
        }
        setErr( newErr )
    }

    return(
        <div>
            <h1>Upload your items</h1>

            <div className="formProduct">
            <p>Your item: </p>
            <input type="text" name="name" onFocus={handleFocus} placeholder="Item name" maxLength={20} onChange={(event) => setInputProduct(event.target.value)}></input>
            {err.name && <span>{err.name.message}</span>}
            </div>

            <p>Description</p>
            <textarea type="text" name="description" onFocus={handleFocus} style={{"height" : "100px", "width" : "200px"}} placeholder="Be concise, you just have 100 characters" maxLength={100} onChange={(event) => setinputDesciption(event.target.value)}></textarea>
            {err.description && <span>{err.description.message}</span>}


            <p>Condition</p>
            <select name="condition" onChange={(event) => setInputCondition(event.target.value)}>
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Correct">Correct</option>
                <option value="Bad">Bad</option>
            </select>

            <p>Category</p>
            <select name="category" onChange={(event) => setInputCategory(event.target.value)}>
                <option value="TV, Audio y Foto">TV, Audio y Foto</option>
                <option value="Deporte y Ocio">Deporte y Ocio</option>
                <option value="Moda y accesorios">Moda y accesorios</option>
                <option value="Móviles y Telefonía">Móviles y Telefonía</option>
            </select>

            <p>What kind of item are you looking for?</p>
            <select name="interests" onChange={(event) => setInputInterests(event.target.value)}>
                <option value="TV, Audio y Foto">TV, Audio y Foto</option>
                <option value="Deporte y Ocio">Deporte y Ocio</option>
                <option value="Moda y accesorios">Moda y accesorios</option>
                <option value="Móviles y Telefonía">Móviles y Telefonía</option>
            </select>
            
            <div className="loadImg">
            <p>Upload the image of your item</p>
            <input type="file" 
            onChange={(event) => {
                setImageSelected(event.target.files[0])
            }} /> 
            {err.img && <span>{err.img.message}</span>}

            </div>

            <button className="uploadItem" onClick={() => {handleSubmit(); notify()}}>Upload your item!</button> {/* se encapsula notify como función dentro del onClick para que llame a las dos funciones al mismo tiempo*/}

            <ToastContainer autoClose={3000} /> {/* Prueba para TOAST */}

        </div>
    );
};

export default Form;