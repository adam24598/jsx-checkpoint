import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css"
import imageInSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div style={{border:'solid 1px black',maxWidth:"100vw"}}>  
          	<h1 className="title red"> Your name here </h1>  
            <div className='new-line'></div>
 
            <img src={imageInSrc.jpg}/>            
             <div className='new-line'></div>

 
             	<img src="/imageInPublic.jpg"/> 
 
    </div>  
 
    <video width="320" height="240" controls>  

        <source src="myVideo.mp4" type="video/mp4"/> 
 
    </video>
  );
}

export default App;
