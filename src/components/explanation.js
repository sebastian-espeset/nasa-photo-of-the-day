import React, {useEffect, useState} from "react";
import styled, { keyframes } from "styled-components";

export default function Explanation({explanation}){


    
    return(
        <StyledExplanation>
            <p>{explanation}</p>
        </StyledExplanation>
    )
}
const Kf = keyframes`
    //set a %, at that % something will happen.. So, set ending point here
    //an animation, and must be imported into the style
    100%{
        transform:scale(1) ;
        opacity:1;
    }

`

const StyledExplanation= styled.div`
    transform:scale(3);
    animation:${Kf} 3s forward;
    opacity:0;
    font-size: 26px;
    color:black;
    display:flex;
    align-items:column;
     &:hover {
    color:black;
    transition: all 0.5s ease-in-out;
    opacity:100%;
     }
     
     transition: all 0.5s ease-in-out;
`