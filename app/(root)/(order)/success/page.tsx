import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className='w-full h-[60vh] flex items-center justify-center flex-col '>
        <Image src={"/images/order.svg"} alt='success' width={300} height={300}/>
        <h1 className='mt-2 text-3xl mb-8 font-bold uppercase text-green-600'>Order Succuessful</h1>
        <Link href={"/"}>
        <Button>Go To Home</Button>
        </Link>
    </div>
  )
}

export default SuccessPage