import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { Heart, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
            {/*Logo*/}
            <Link href={'/'}>
            <Image src={'/images/logo7.png'} alt='logo' width={140} height={140}/>
            </Link>
            {/*Icons*/}
            <div className='flex items-center space-x-6'>
              {/* SearchBox */}
              <SearchBox/>
              {/* HeartIcon */}
              <Heart size={26} cursor={'pointer'}/>
              <ShoppingCartButton/>
              {/* UserIcon */}
              {/* When user is signed in */}
              <SignedIn>
              <UserButton/>
              </SignedIn>
              {/* When user is signed out */}
              <SignedOut>
                <SignInButton>
                <UserIcon size={26} cursor={'pointer'}/>
                </SignInButton>
              </SignedOut>
              
            </div>

        </div>
        </div>
  )
}

export default Nav