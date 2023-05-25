import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { auth, provider } from '../context/firebase'
import { signInWithPopup } from 'firebase/auth'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [values, setValues] = useState('')

  const handleClick = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  const handleSubmit = async e => {}

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div className='flex justify-center items-center'>
        <Link>
          <button
            onClick={handleClick}
            className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'
          >
            Sign In with Google
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Signin
