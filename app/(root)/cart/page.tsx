"use client"
import { Button } from '@/components/ui/button'
import { RootState } from '@/store/store'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    // Get items from the cart
    const items = useSelector((state:RootState)=> state.cart.items)
    // Total quantity of items in the cart
    const totalQuantity = items.reduce((total, item)=> total + item.quantity, 0)
    // Total price of items in the cart
    const totalPrice = items.reduce((total, item)=> total + item.price*item.quantity, 0).toFixed(2)

    // Calculate vat value
    const vat = (+totalPrice * 0.2).toFixed(2)
    // Total Price with vat
    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2)
    console.log({totalPrice,vat,totalPriceWithVat})

  return (
    <div className='mt-6 min-h-[60vh]'>
        {/* if the cart is empty*/}
        {items.length === 0 &&(
            <div className='flex items-center w-full h-[80vh] flex-col justify-center'>
                <Image src="/images/cart.svg" alt='empty_cart' width={400} height={400} className='object-cover mx-auto'/>
                <h1 className='mt-8 text-2xl font-semibold'>Your Cart is Empty</h1>
                <Link href='/'>
                <Button className='mt-4'>Shop Now</Button>
                </Link>
            </div>
        )}
        {/* if the cart is not empty*/}
        {items.length > 0 &&(
            <div className='md:w-4/5 w-[95%] mx-auto grid grid-col-1 xl:grid-cols-6 gap-12'></div>
        )}

    </div>
  )
}

export default Cart