import { useState } from 'react'
import IntegImage from './../public/IntegImage.jpg'
import bginteg from './../public/bginteg.jpg'
import './App.css'

function App() {
  return (
    <main className='min-h-screen bg-gray-100 flex items-center justify-center ' style={{backgroundImage: `url(${bginteg})`}}>
      <div className=''>
        <div className=''>
        <img src={IntegImage} alt="Logo" className="left-integ" style={{ maxHeight :"100rem", height: "800px", float: "left"}} />
        </div>
      </div>
      <div className='flex flex- justify-center px-12 py-12'>
        <div className='mb-12'>
          <h2 className='absolute pl-65 top-60.75 left-219 w-92.25 h-12 text-sm tracking-[0.7em] text-center'> INTEGRITY</h2>
          <h1 className='absolute pl-50 top-64.75 left-219 w-92.25 h-33.75 text-[128px] text-center font-extrabold text-gray-800 font-montserrat'> PMS</h1>
          </div> 
        </div>
        <form className=" space-y-5 pt-60">
        <input 
        type='text'
        placeholder='Username'
        className='w-full h-13.75 border-2 border-gray-300 rounded-xs text-[16px] px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-500'/>
        <input 
        type='text'
        placeholder='Password'
        className='w-full h-14 border-2 border-gray-300 rounded-xs text-[16px] px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-500'/>
        <div className='text-right'>
          <button
          type='button'
          className='text-sm text-red-500 hover:underline'>
            Forgot Password ?
          </button>
        </div>
        <button
        type='submit'
        className='w-full border-2 bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg shadow-md'>
          Login
        </button>
          <p className='flex-initial pl-35 text-xs text-gray-400 mt-10 text-center md:text-left mb-0'>
          Copyright © 2010-2024 IntegrityPMS. All Right Reserved.  
        </p> 

        </form>

    </main>
  )
}

export default App

