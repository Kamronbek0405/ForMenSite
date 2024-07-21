import React from 'react'
import { EmailIcon } from '../../assets/email-icon'
import {  LocationIcon } from '../../assets/location-icon'
import { Instagram } from '../../assets/instagram'
import { Facebook } from '../../assets/facebook'
import { Telegram } from '../../assets/telegram'
import zoodPay from '../../pages/home/components/img/zoodPay.png'
export const Footer = () => {
  return (
    <div className='w-[90%] h-[500px] flex items-center justify-around bg-slate-900 rounded-xl'>
      <div className='flex flex-col gap-3 text-white '>
        <strong className='text-yellow-400 text-lg'>All or Nothing</strong>
        
        <a href="">+ 94 009 4001</a>
      
        <a href="">+ 94 009 4001</a>

      </div>
      <div className='flex  flex-col text-white'>
        <strong >Biz haqimizda</strong>
        <span className='mt-5'>Ish vaqti 11:00-23:00</span>
      </div>
      <div>
        <span className='flex gap-3 w-[250px] h-[50px] items-center justify-center bg-gray-400 rounded-lg'><EmailIcon/>allornothing.uz@gmail.com</span>
        <span className='flex gap-3 w-[340px] h-[50px]  items-center justify-center rounded-xl bg-gray-400 mt-3'> <LocationIcon/>T.sh Moirobod tuman. Fidokor 10. 4a uy </span>
      </div>
      <div className='flex gap-3'>
        <Instagram/>
        <Facebook/>
        <Telegram/>
      </div>
    </div>

  )
}
