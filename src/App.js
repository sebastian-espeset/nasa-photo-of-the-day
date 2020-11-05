import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/header'
import Image from './components/image'
import Explanation from './components/explanation'

//always initialize state with data, empty array is fine

function App() {
  const [nasaData,setNasaData] = useState();
  const [header,setHeaderTitle] = useState();
  const [image_url,setImageUrl] = useState();
  const [explanation,setExplanation]= useState();
  function fetchNasaData(){
    
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=b8klObZR5ZQtC3L7NIwUCyCgY1B5NPCWIsP54buL&date=2020-11-04")
    .then((res)=>{
      setNasaData(res.data)
      setHeaderTitle(res.data.title)
      setImageUrl(res.data.url)
      setExplanation(res.data.explanation)
      console.log(res.data)

    })
    .catch((err)=>{
      console.log('here is the error: '+ err)
    });
    
  }
useEffect(()=>{
    fetchNasaData();
    ;
  },[]);
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header header = {header}/>
      <Image image_url = {image_url}/>
      <Explanation explanation = {explanation}/>
    </div>
  );
}

export default App;
