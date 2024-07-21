import React from 'react'
import { Hero } from './components/hero'
import { Menu } from './components/menu'
import { NewProduct } from './components/new-product'
import { newProductData } from '../data/product-data'
import { LikeProduct } from '../../assets/like-product'
import { Brand } from './components/brand'


export const Home = () => {
  return (
    <div>
        <section className='w-[100%] h-[750px] bg-black flex items-center justify-center '>
            <Hero/>
        </section>
        <section className='w-[100%] h-[100vh] relative bg-black flex items-center justify-center flex-col '>
            <h1 className='absolute top-0 left-0 ml-3 text-white' >ALL MENU</h1>
            <Menu/>
        </section>
        <section className='w-[100%] h-[140vh] bg-black flex items-center justify-center'>
            <NewProduct/>
        </section>
        <section className='w-[100%] h-[120vh] flex items-center justify-center bg-black'>
          <Brand/>
        </section>
        <section className='w-[100%] h-[90vh] bg-black flex items-center justify-center flex-col relative'>
          <h1 className='text-white absolute left-0 top-10 ml-5 '>ACESSUARS</h1>
        <div className='flex gap-12'>
        {newProductData.map((item) =>(
        <div className='w-[300px] h-[410px] bg-white rounded-xl flex items-center flex-col hover:scale-105 hover:shadow-lg hover:shadow-gray-300 '>
          <div className='flex w-[260px] items-center justify-between mt-5'>
            <span className='w-[30px] h-[30px] text-red-600 font-medium'>{item.discount}</span>
            <LikeProduct/>
          </div>
          <img className='w-[200px] h-[200px] mt-5' src={item.img} alt="img" />
          <h1 className='text-xl w-[200px] mr-10 font-medium'>{item.name}</h1>
          <div className='mr-12 mt-3 '>
            <span className='text-xl text-red-600 font-medium'>{item.price}</span>
            <span className='text-gray-500 line-through ml-5'>{item.price2}</span>
          </div>
        </div>
      ))}
        </div>
        </section>
    </div>
  )
}
