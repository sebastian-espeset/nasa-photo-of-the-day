import React, {useEffect, useState} from "react";


export default function Image({image_url}){

    return(
        <div className ='image-container'> 
        <img src = {image_url}/>
        </div> 
       
    )
}