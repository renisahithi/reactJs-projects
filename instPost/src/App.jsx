import React from "react";
import Post from "./Component/Post";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import './App.css';
import { useState } from "react";

function App() {


  return (
    <div className="Post">
     <h1>MINI IMAGE FEED</h1>
      <Post image={image1} name="nature feel it" />
      <Post image={image2} name="night view" />
      <Post image={image3}name="food capturing" />
      o 
      

    </div>
  );
}

export default App;
