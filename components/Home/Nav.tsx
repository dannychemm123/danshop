import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { Heart } from 'lucide-react'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
            {/*Logo*/}
            <Link href={'/'}>
            <Image src={'/images/logo3.png'} alt='logo' width={140} height={140}/>
            </Link>
            {/*Icons*/}
            <div className='flex items-center space-x-6'>
              {/* SearchBox */}
              <SearchBox/>
              <Heart size={26} cursor={'pointer'}/>
            </div>

        </div>
        </div>
  )
}

export default Nav