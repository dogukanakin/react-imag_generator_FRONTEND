import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { logo } from './assets'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b[#e6ebf4]'>
        <Link to='/' className='text-2xl font-bold text-gray-800'>
          <img src={logo} alt='logo' className='w-28' object-contain />
        </Link>

        <Link
          to='/create-post'
          className='px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white'
        >
          Create Post
        </Link>
      </header>

      <main className='sm:px-8 py-4 w-full bg-[#f9fafe] min-h[calc(100vh -73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
