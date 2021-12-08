import React from "react"
import Axios from "axios"
import { useState } from "react"
import { Image } from "cloudinary-react"


function Uploadimage (){

    const [imageSelected, setImageSelected] = useState("")

const uploadImage = () => {

    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset","gzjkizxz" ) 

    Axios.post("https://api.cloudinary.com/v1_1/swappapp/image/upload", formData).then((response)=> {console.log(response.data.secure_url)
    setImageSelected(response.data.secure_url)
    // const imgCloud = response.data.secure_url
    })

}
    return (
        <div>
            <input type="file"
            onChange={(event) => {
                setImageSelected(event.target.files[0])
            }} />
            
            <button onClick={uploadImage}>Upload Image</button>

            <div>
                <img src={imageSelected} alt="img" />
                
            </div>

        </div>
    )
}

export default Uploadimage