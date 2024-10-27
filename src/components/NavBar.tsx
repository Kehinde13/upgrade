import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/upgrade-inc-logo-vector-removebg-preview 1.svg'

function NavBar() {
  return (
    <div>
        <h1>upgrade</h1>
        <div suppressHydrationWarning>
          <Image src={logo} alt='logo'  />
        </div>
    </div>
  )
}

export default NavBar