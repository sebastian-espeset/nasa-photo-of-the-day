import React, {useEffect, useState} from "react";
import styled, { keyframes } from "styled-components";
export default function Header({header}){
    

//get the data, dot notation...
//pass state into header component, call that state using props...
    return(
        <StyledHeader>
            <h1>{header}</h1>
            </StyledHeader>
    ); 
}
const StyledHeader= styled.div`
    font-size:20px;
     &:hover {
    color:green;
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;

`



