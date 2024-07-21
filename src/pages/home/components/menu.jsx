import React from 'react'
import { MenuData } from '../../data/product-data'
import { Button } from '../../../components/ui/button'
import { ArrowIcon } from '../../../assets/arrow-icon'

export const Menu = () => {
  return (
    <div className='w-[90%] h-[82vh] flex flex-wrap  gap-3'>
       <div>
       {MenuData.slice(0,1).map((item) =>(
           <div className='w-[676px] h-[250px] border-2  rounded-xl bg-slate-200 flex items-center justify-center gap-20'>
           <div className='w-[200px] h-[200px] '>
              <h1 className='text-5xl font-'>{item.name}</h1>
            <Button endIcon={<ArrowIcon/>} className="w-[156px] h-[40px] bg-red-400 font-medium mt-5 gap-3 rounded-full flex items-center justify-center">SHOP NOW</Button>
           </div>
           <img  src={item.img} alt="" />
           </div>
        ))}
        {MenuData.slice(2,3).map((item) =>(
           <div className='w-[676px] h-[344px] mt-3  rounded-xl  bg-white  flex items-center justify-center gap-20'>
             <div className='w-[300px] h-[200px]  mb-[100px] '>
              <h1 className='text-5xl font-'>{item.name}</h1>
            <Button endIcon={<ArrowIcon/>} className="w-[156px] h-[40px] bg-yellow-400 font-medium mt-5 gap-3 rounded-full flex items-center justify-center">SHOP NOW</Button>
           </div>
            <img src={item.img} alt="" />
           </div>
        ))}
        
       </div>
        <div>
        {MenuData.slice(1,2).map((item) =>(
          <div className='w-[676px] h-[344px] bg-white rounded-xl flex items-center justify-center gap-20'>
           <div className='w-[300px] h-[200px]  mb-[100px] '>
             <h1 className='text-5xl font-'>{item.name}</h1>
           <Button endIcon={<ArrowIcon/>} className="w-[156px] h-[40px] bg-blue-400 font-medium mt-5 gap-3 rounded-full flex items-center justify-center">SHOP NOW</Button>
          </div>
           <img className='h-[280px]' src={item.img} alt="" />
          </div>
       ))}
        {MenuData.slice(3,4).map((item) =>(
           <div className='w-[676px] h-[250px] rounded-xl bg-slate-200 flex items-center justify-center gap-20 mt-3'>
             <div className='w-[200px] h-[200px] '>
              <h1 className='text-5xl font-'>{item.name}</h1>
            <Button endIcon={<ArrowIcon/>} className="w-[156px] h-[40px] bg-orange-300 font-medium mt-5 gap-3 rounded-full flex items-center justify-center">SHOP NOW</Button>
           </div>
            <img src={item.img} alt="" />
           </div>
        ))}
        
        </div>
    </div>
  )
}
