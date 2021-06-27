import React from "react";
import "./App.css";

const ImageList = (props) => {

const images = props.images.map((image,id) => {
    return <img key = {id} src = {image.webformatURL} alt = "images"/>
});

    return(
       
            <div className = "container" style = {{marginTop : "20px" , marginBottom: "20px"}}>
            {images }
            </div>
          
        
    )
}

export default ImageList;