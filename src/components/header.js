import React, {useEffect, useState} from "react";

export default function Header({header}){
    

//get the data, dot notation...
//pass state into header component, call that state using props...
    return(
        <div className='header-container'>
            <h1>{header}</h1>
        </div>
    ); 
}