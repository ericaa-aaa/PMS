import { useState } from 'react'
import IntegImage from './../public/IntegImage.jpg'
import './App.css'

function App() {
  return (
    <main style={{ display: "flex", height: "100vh", width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex",flexDirection: "row", alignItems:"center" , justifyContent: "center"}}>
        <img src={IntegImage} alt="Logo" className="left-integ" style={{ maxHeight :"100rem", height: "800px", float: "left"}} />
      </div>
      <div className='right-text' style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <div className='fontdesign1'>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0"}}> Integrity</h2>
        </div>
        <div className='fontdesign2'>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "0" }}> PMS</h1>
        </div>
        </div>
        <div>
        <input className='login' placeholder="Username" style={{ }}/>
        <input className='password' placeholder='Password' style={{}}/>
  
        </div>
    </main>
  )
}

export default App
