import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const movieRelease=2022;
  const currentYear=new Date().getFullYear();
  const YearPassed= movieRelease - currentYear;

  return (
    <div>
    <h1>RRR(2022)</h1>
    <p>this movie conclude about love,trust,friendship</p>
    <p>its been{YearPassed}since it was released!! Watch noww...</p>
    </div>
  )
}

export default App
