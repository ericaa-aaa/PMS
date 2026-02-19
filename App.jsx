import { useState } from 'react'
import IntegImage from './../public/IntegImage.jpg'
import bginteg from './../public/bginteg.jpg'
import './App.css'

function App() {
  return (
    <main className='flex flex-row w-screen h-screen justify-items-center overflow-hidden' 
      style={{ backgroundImage: `url(${bginteg})`, backgroundSize:'cover', backgroundPosition:'center', 
      backgroundAttachment:'fixed', backgroundRepeat:'no-repeat'}}>

        <div className='relative flex flex-row w-full'>
          <div className='flex flex-row'>
            <img src={IntegImage} alt="Logo" className='round-xl w-161 h-241 pl-10 py-10'/>
          </div>
            <div className='flex flex-col gap-3 justify-center mr-100 text-center'>
              <h2 className='absolute gap-10 pl-58 top-60.75 left-219 w-92.25 h-12 text-3xl font-serif font-semibold tracking-[0.4em] text-center'> INTEGRITY</h2>
              <h1 className='absolute gap-10 pl-55 top-64.75 left-219 w-92.25 h-33.75 text-[128px] text-center font-extrabold tracking-widest text-gray-800 font-montserrat'> PMS</h1>
            </div>
              <div className='flex flex-col gap-5 pt-80 items-end justify-center mr-100 text-center'>
                <input type="text" placeholder='Username' className='w-101 h-13.75 border-2 border-gray-300 rounded-xs text-[16px] px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-500'/>
                <input type="text" placeholder='Password' className='w-101 h-13.75 border-2 border-gray-300 rounded-xs text-[16px] px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-500' />
                <button type='submit' className='w-full border-2 bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg shadow-md'>Login</button>
                <p className='align-text-bottom text-xs text-gray-400 mt-10 justify-center text-center mb-0 pr-10 pb-10'>Copyright © 2010-2024 IntegrityPMS. All Right Reserved.  </p> 
              </div>
        </div>
    </main>
  )
}
export default App

