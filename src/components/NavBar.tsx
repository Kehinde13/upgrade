import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/upgrade-inc-logo-vector-removebg-preview 1.svg'
import Mobilemenu from './Mobilemenu'

function NavBar() {
  return (
    <div className='customDiv text-gray-200 w-full flex justify-between py-2 md:py-3 md:px-20 px-4 '>
        <div>
          <Image src={logo} alt='logo'  />
        </div>

        <ul className='hidden lg:flex self-center gap-5'>
          <li>Personal Loan</li>
          <li>One Card</li>
          <li>Savings</li>
          <li>Checkings</li>
          <li>Help</li>
        </ul>

        <button className='py-1 px-3 border-gray-200 border rounded-md hidden lg:block'>
          Sign In
        </button>

        <Mobilemenu />
    </div>
  )
}

export default NavBar