import React from "react"
import "./App.css"
function App() {
  const MyName="sahithi Reni"
  const MyAim="developer"
  const FunFact="Nothing"
  const yourName="Ramya Reni"
  const yourAim="doctor"
  const Fun="everything"
  return (
  <div>
    <div id="div1">
  <h1>myName:{MyName}</h1>
  <h2>myAim:{MyAim}</h2>
  <h2>FunFact:{FunFact}</h2>
  </div>
  <div id="div2">
  <h1>myName:{yourName}</h1>
  <h2>MyAim:{yourAim}</h2>
  <h2>practice:{Fun}</h2>
  </div>
  </div>
  )
}

export default App;
