import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import {
  Home,
  CreatePost,
  PageNotFound,
  Signin,
  Signup,
  Account
} from './pages'
import Navigate from './pages/ProtectedRoute'
import { logo } from './assets'

const App = () => {
  return (
    <BrowserRouter>
      <main className='sm:px-8 py-4 w-full bg-[#f9fafe] min-h[calc(100vh -73px)]'>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b[#e6ebf4]'>
          <Link to='/' className='text-2xl font-bold text-gray-800'>
            <img src={logo} alt='logo' className='w-28' object-contain />
          </Link>
        </header>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
