import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  './header-img/logo.png'
import { UserIcon } from '../../assets/user-icon'
import { Like } from '../../assets/like'
import { Korzinka } from '../../assets/korzinka'

export const Header = () => {
  return (
    <div className='w-[100%] h-auto py-3   flex  items-center justify-between bg-gray-400 px-8 '>
       <div className='flex items-center justify-between gap-5 w-[43%]'>
       <img src={Logo} alt="logo" />
        <div className='flex items-center justify-between gap-5'>
        <Link className="w-[90px] h-[40px] font-bold hover:scale-105 hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg " to={'/'}>MEN</Link>
        <Link className="w-[90px] h-[40px] font-bold hover:scale-105 hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg " to={'/women'}>WOMEN</Link>
        <Link className="w-[90px] h-[40px] font-bold hover:scale-105 hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg " to={'/sale'}>SALE</Link>
        <Link className="w-[90px] h-[40px] font-bold hover:scale-105 hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg " to={'/children'}>CHILDREN</Link>
        <Link className="w-[90px] h-[40px] font-bold hover:scale-105 hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg " to={'/collection'}>COLLECTION</Link>
        </div>
       </div>
       <div className=' flex items-center justify-center gap-10 '>
        <select className='w-[100px] h-[30px] bg-gray-400'> 
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Uzbekcha">Uzbekcha</option>
        </select>
        <div className='flex w-[210px] items-center  justify-center gap-2 border-l-2 border-gray-400 '  >
            <UserIcon/>
            <Like/>
            <Korzinka/>
        </div>
       </div>
    </div>
  )
}
