import React from 'react'
import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'
import zoodPay from '../../pages/home/components/img/zoodPay.png'


export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
      <Outlet/>
      </main>
      <footer className='w-[100%] h-[150vh] bg-black flex items-center justify-around flex-col'>
      <img src={zoodPay} alt="" />

        <Footer/>
      </footer>
    </div>
  )
}
