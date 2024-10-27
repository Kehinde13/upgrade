import Image from 'next/image'
import React from 'react'
import sphere from '@/app/assets/Logo wrap.png'
import samsung from '@/app/assets/Frame 469274.png'
import visa from '@/app/assets/Frame 469314.png'
import amazon from '@/app/assets/Frame 469263.png'
import paypal from '@/app/assets/Paypal.png'
import alipay from '@/app/assets/Frame 1000011375.png'

function Partners() {
  return (
    <div className='bg-[#04684C] flex gap-8 p-2 justify-around flex-wrap items-center'>
      <Image src={sphere} alt='' />
      <Image src={samsung} alt='' />
      <Image src={visa} alt='' />
      <Image src={amazon} alt='' />
      <Image src={paypal} alt='' />
      <Image src={alipay} alt='' />
    </div>
  )
}

export default Partners