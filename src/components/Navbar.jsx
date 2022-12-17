import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=' flex justify-between items-center p-4 z-[100] w-full absolute'>
      <Link to={'/'}>
        <h1 className='font-bold text-4xl text-red-500 cursor-pointer'>
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={'/account'}>
            <button className='text-white mr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogOut}
            className='cursor-pointer text-white bg-red-600 rounded px-6 py-2'
          >
            LogOut
          </button>
          =
        </div>
      ) : (
        <div>
          <Link to={'/login'}>
            <button className='text-white mr-4'>Sign In</button>
          </Link>
          <Link to={'/signup'}>
            <button className='cursor-pointer text-white bg-red-600 rounded px-6 py-2'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
