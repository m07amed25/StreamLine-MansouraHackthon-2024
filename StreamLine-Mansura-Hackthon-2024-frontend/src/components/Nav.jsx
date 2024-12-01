import React from 'react'
import logo from '../assets/logo.svg'

function Nav() {
  return (
      <div className='sticky top-0 left-0 z-50 flex justify-between h-10 w-full py-8 px-4 shadow-lg bg-white'>
          <div className='flex justify-between items-center text-sm font-bold'>
              <img src={logo} alt="" className='w-44 h-44' />
              <span className=''></span>
          </div>
          <div className='w-1/2 h-full text-xs'>
              <ul className='flex w-full justify-between h-full items-center'>
                  <li>Home</li>
                  <li>Tours</li>
                  <li>Activities</li>
                  <li>Hotels</li>
                  <li>Contact</li>
                  <li>Join our team</li>
              </ul>
          </div>
          <div className='h-full flex items-center text-sm font-bold'><button className='px-4 py-2 border border-gray-400 rounded-full'>Signin</button></div>
    </div>
  )
}

export default Nav