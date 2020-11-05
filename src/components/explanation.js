import React, {useEffect, useState} from "react";

export default function Explanation({explanation}){


    
    return(
        <div className = 'explanation-container'>
            <p>{explanation}</p>
        </div> 
    )
}