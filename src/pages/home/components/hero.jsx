import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Button } from '../../../components/ui/button';
import HeroImg from './img/hero-img.png'
import { Arrow } from '../../../assets/arrow';


export const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         
        autoplaySpeed: 1000,
    };
    return (
        <Slider className='flex w-[90%] items-center justify-center gap-5 '  {...settings}>
            <div className=' w-[500px]  rounded-2xl mt-5 bg-gray-500 flex items-center'>
                <div className=' w-[100%] h-[600px] flex items-center justify-between px-10'>
                    <div className='w-[790px] h-[480px] mt-10  relative'>
                        <h1 className='  text-8xl font-medium  leading-loose '>CHIKAGO WEARS FOR MEN
                        </h1>
                        <Button className="w-[250px] h-[80px] text-xl font-medium border-2  border-black bg-orange-300 rounded-full flex items-center justify-center gap-3 absolute right-[80px] bottom-[160px]" endIcon={<Arrow />}>VIEW NOW ALL</Button>
                    </div>
                    <img src={HeroImg} alt="img" />
                </div>
            </div>
            <div className='  rounded-2xl mt-5 bg-gray-500 flex items-center'>
                <div className=' w-[100%] h-[600px] flex items-center justify-between px-10'>
                    <div className='w-[790px] h-[480px] mt-10  relative'>
                        <h1 className='  text-8xl font-medium  leading-loose '>CHIKAGO WEARS FOR MEN
                        </h1>
                        <Button className="w-[250px] h-[80px] text-xl font-medium border-2  border-black bg-orange-300 rounded-full flex items-center justify-center gap-3 absolute right-[80px] bottom-[160px]" endIcon={<Arrow />}>VIEW NOW ALL</Button>
                    </div>
                    <img src={HeroImg} alt="img" />
                </div>
            </div>
            <div className='  rounded-2xl mt-5 bg-gray-500 flex items-center'>
                <div className=' w-[100%] h-[600px] flex items-center justify-between px-10'>
                    <div className='w-[790px] h-[480px] mt-10  relative'>
                        <h1 className='  text-8xl font-medium  leading-loose '>CHIKAGO WEARS FOR MEN
                        </h1>
                        <Button className="w-[250px] h-[80px] text-xl font-medium border-2  border-black bg-orange-300 rounded-full flex items-center justify-center gap-3 absolute right-[80px] bottom-[160px]" endIcon={<Arrow />}>VIEW NOW ALL</Button>
                    </div>
                    <img src={HeroImg} alt="img" />
                </div>
            </div>

        </Slider>
    )
}
