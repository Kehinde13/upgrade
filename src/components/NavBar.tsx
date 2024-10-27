import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/upgrade-inc-logo-vector-removebg-preview 1.svg'

function NavBar() {
  return (
    <div>
        <div>
          <Image src={logo} alt='logo'  />
        </div>
    </div>
  )
}

export default NavBar