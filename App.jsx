import { useState } from 'react'
import IntegImage from './../public/IntegImage.jpg'
import bginteg from './../public/bginteg.jpg'
import './App.css'

function App() {
  return (
    <>
      <main className='flex w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed justify-around'
      style={{ backgroundImage: `url(${bginteg})`}} >     
            <div className='flex flex-row rounded-full'>
              <img src={IntegImage} alt="Logo" className='rounded-4xl my-5 ml-5 relative right-50'/>         
              <div className="w-1/2 flex flex-col items-center justify-center text-center px-20">
                  <h2 className="text-4xl tracking-[0.4em] font-montserrat leading-1" >INTEGRITY</h2>
                  <h1 className=" text-[120px] font-black tracking-widest text-gray-800 mb-8 font-montserrat">PMS</h1>
                <div className="w-full max-w-md">
                    <input type="text" placeholder="Username" className="w-full border border-gray-300 px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-500"/>
                    <input type="password" placeholder="Password" className="w-full border border-gray-300 px-4 py-3 mb-6 focus:outline-none focus:ring-1 focus:ring-gray-500"/>
                    <button className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-md">Login</button>
                    <p className="text-xs text-gray-400 mt-12 relative top-50">Copyright © 2010-2024 IntegrityPMS. All Right Reserved.</p>
                  </div>
              </div>
              </div>
        </main>
    </>
  )
}
export default App

/* ang width ay 50% (w-1/2), tapos flex para ma spread out siya regardless anong size ng desktop and walang magulo, 
tas centered lahat ng items, pagkaka justify at text tas ang px is para pantay ang height and width.
yung tracking is the spaces between the letters para naka spread out.
parang ganon rin ang tracking-widest ang difference ay may value siya which is 0.1rem.
ang max-w-md naman ay ang maximum width ng containers which means hanggang dun lang siya.

*/
