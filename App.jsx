import { useState } from 'react'
import IntegImage from './../public/IntegImage.jpg'
import './App.css'

function App() {
  return (
    <main style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      <div style={{ display: "flex",flexDirection: "row", alignItems:"center" , justifyContent: "center"}}>
        <img src={IntegImage} alt="Logo" className="left-integ" style={{ maxHeight :"100rem", height: "800px", float: "left"}} />
      </div>
      <div className='right-text'>
        <div className='fontdesign1'>
          <h1 style={{ textAlign: "justify", fontWeight: "900px"}}> Integrity</h1>
        </div>
        <div className='fontdesign2'>
          <h1 style={{ textAlign: "justify" }}> PMS</h1>
        </div>
      </div>
    </main>
  )
}

export default App
