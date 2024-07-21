import React from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowIcon } from '../../../assets/arrow-icon'
import { brandData } from '../../data/brand'


export const Brand = () => {
    return (
        <div className='w-[97%] h-[70vh] flex '>
            <div>
                <h1 className='text-6xl font-medium text-white'>SELECTION BY BRANDS</h1>
                <Button endIcon={<ArrowIcon />} className="w-[168px] h-[40px] bg-yellow-500 mt-8 rounded-full flex items-center justify-center gap-3 font-medium">BY BRAND</Button>
            </div>
            <div className='flex w-[75%] h-[550px] bg-black gap-4 flex-wrap'>
               <div >
               {brandData.slice(0, 1).map((item) => (
                    <div className='flex'>
                        <img className='w-[146px] h-[146px]' src={item.image} alt="img" />
                    </div>
                ))}
                {brandData.slice(1, 2).map((item) => (
                    <div className='flex mt-5'>
                        <img className='w-[146px] h-[294px]' src={item.image} alt="img" />
                    </div>
                ))}
               </div>
                <div>
                {brandData.slice(2, 3).map((item) => (
                    <div className='flex'>
                        <img className='w-[294px] h-[146px  ]' src={item.image} alt="img" />
                    </div>
                ))}

                {brandData.slice(3, 4).map((item) => (
                    <div className='flex mt-5'>
                        <img className='w-[294px] h-[294px]' src={item.image} alt="img" />
                    </div>
                ))}
                </div>

              <div>
              {brandData.slice(4, 5).map((item) => (
                    <div className='flex'>
                        <img className='w-[294px] h-[294px]' src={item.image} alt="img" />
                    </div>
                ))}

                {brandData.slice(5, 6).map((item) => (
                    <div className='flex mt-5'>
                        <img className='w-[294px] h-[146px]' src={item.image} alt="img" />
                    </div>
                ))}
              </div>

               <div>
               {brandData.slice(6, 7).map((item) => (
                    <div className='flex'>
                        <img className='w-[146px] h-[294px]' src={item.image} alt="img" />
                    </div>
                ))}

                {brandData.slice(7, 8).map((item) => (
                    <div className='flex mt-5'>
                        <img className='w-[146px] h-[146px]' src={item.image} alt="img" />
                    </div>
                ))}
               </div>
            </div>
        </div>
    )
}
