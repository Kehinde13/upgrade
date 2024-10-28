import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/upgrade-inc-logo-vector-removebg-preview 1.svg'
import apple from '@/app/assets/Mobile app store badge (1).png'
import google from '@/app/assets/Mobile app store badge.png'
import twitterIcon from '@/app/assets/Frame 1000003573.png'
import facebookIcon from '@/app/assets/Frame 1000003603.png'
import instagramIcon from '@/app/assets/Frame 1000003604.png'
import linkedIn from '@/app/assets/Frame 1000003602.png'


function Footer() {
  return (
    <div className='w-full mx-auto flex flex-col items-center text-center'>
        <div className=''>
            <Image src={logo} alt="upgrade logo" className='w-[300px] mx-auto' />
            <div className='flex items-center gap-3 justify-center'>
                <Image src={apple} alt="Apple Store" />
                <Image src={google} alt="Google Pay" />
            </div>
            <ul className='md:flex gap-10 my-5'>
              <li>Personal Loan</li>
              <li>One Card</li>
              <li>Savings</li>
              <li>Checkings</li>
              <li>Contact</li>
              <li>Help</li>
              <li>Support</li>
            </ul>
        </div>

        <div className='my-10 space-y-5'>
          <div className='flex gap-5 justify-center'>
            <Image src={twitterIcon} alt='twitter' />
            <Image src={facebookIcon} alt='facebook' />
            <Image src={instagramIcon} alt='instagram' />
            <Image src={linkedIn} alt='linkedin' />
          </div>

          <p><span className='font-bold'>Send Your Feedback:</span> moc.edargpu@tcatnoc</p>

          <ul className='md:flex gap-6 my-5'>
            <li className='md:pr-4 md:border-r border-gray-300 last:border-none'>Privacy Policy</li>
            <li className='md:pr-4 md:border-r border-gray-300 last:border-none'>Terms & Conditions</li>
            <li className='md:pr-4 md:border-r border-gray-300 last:border-none'>Cookies Notice</li>
            <li className='md:pr-4 md:border-r border-gray-300 last:border-none'>Copyright Policy</li>
            <li className='md:pr-4'>Data Policy</li>
          </ul>

          <p>&copy; 2024 Design Monks, All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer