import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
      {/* define grid*/}
      <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Content*/}
        <div>
          <h1 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'>
            Mega Sale <span className='text-rose-600'>Special
              <br /></span> Offer Up To {" "}
            <span className='text-orange-500'>60%</span>{" "} Off
          </h1>
          <p className='text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4'>
            Welcome to the Home of Quality Products. <br /> Let us serve you the finest selection
            in fashion, <br /> home décor, and more. Shop now. Exclusive Deals
          </p>
          <div className='flex mt-6 space-x-4 items-center'>
            <Button size={'lg'} className='bg-blue-700'>Shop Now</Button>
            <Button size={'lg'}>Explore More</Button>
          </div>
        </div>
        {/* Image content*/}
        <div className='flex justify-center lg:justify-end'>
          <Image src={'/images/hero.svg'} alt='hero' width={600} height={600}
            className='lg:h-[50%] lg:w-[50%] xl:h-[80%] xl:w-[80%]' />
        </div>
      </div>
    </div>
  )
}

export default Hero
