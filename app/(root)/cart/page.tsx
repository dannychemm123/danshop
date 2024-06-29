"use client"
import { Button } from '@/components/ui/button'
import { RootState } from '@/store/store'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '@clerk/nextjs'
import { CartItem, addItem, clearCart, removeItem } from '@/store/cartSlice'
import PayPalButton from '@/components/Helper/PayPalButton'
import { useRouter } from 'next/navigation'

const Cart = () => {
    // router 
    const router = useRouter()
    const dispatch = useDispatch()
    // Get items from the cart
    const items = useSelector((state:RootState)=> state.cart.items)
    // Total quantity of items in the cart
    const totalQuantity = items.reduce((total, item)=> total + item.quantity, 0)
    // Total price of items in the cart
    const totalPrice = items.reduce((total, item)=> total + item.price*item.quantity, 0).toFixed(2)

    // Calculate vat value
    const vat = (+totalPrice * 0.2).toFixed(2)
    // Total Price with vat
    const totalPriceWithVat = parseFloat((+totalPrice + +vat).toFixed(2))
    console.log({totalPrice,vat,totalPriceWithVat})

    // Get authenticate user
    const {user} = useUser()
        // Add Item
    const addItemHandler = (item: CartItem) =>{
        dispatch(addItem(item))
    }
    // Remove Item
    const removeItemHandler = (id: number) =>{
        dispatch(removeItem({id}))
    }
    // Handle payment success
    const handleSuccess = (details:any)=>{
        router.push("/success")
        dispatch(clearCart())
    }
    


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
            <div className='md:w-4/5 w-[95%] mx-auto grid grid-col-1 xl:grid-cols-6 gap-12'>
                {/* Cart Item*/}
                <div className='rounded-lg shadow-md overflow-hidden xl:col-span-4'>
                    <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-black bg-opacity-80'>Your Cart ({totalQuantity}) Items</h1>
                    {items.map((item) =>{
                       return <div key={item.id}>
                        <div className='flex pb-6 mt-2 p-5 border-b-[1.4px] border-opacity-25 text-gray-700 items-center space-x-10'>
                            <div className=''>
                                <Image src={item.image} alt={item.title} width={180} height={180}/>
                            </div>
                            <div>
                                <h1 className='md:text-xl text-base font-bold text-black'>{item.title}</h1>
                                <h1 className='md:text=lg text-sm font-semibold'> Category : {item.category}</h1>
                                <h1 className='md:text-2xl text-lg font-bold text-blue-950'>GHS {item.price}</h1>
                                <h1 className='md:text-lg text-sm font-semibold'>Quantity : {item.quantity}</h1>
                                <div className='flex items- center mt-4 space-x-2'> 
                                    <Button onClick={()=>{addItemHandler(item)}}>Add More</Button>
                                    <Button onClick={()=>{removeItemHandler(item.id)}} variant={"destructive"}>Remove </Button>
                                </div>
                            </div>
                        </div>
                       </div>
                    })}
                </div>
                {/* Summary */}
                <div className='xl:col-span-2'>
                    <div className='bg-indigo-950 sticky top-[25vh] p-6 rounded-lg'>
                        <h1 className='text-center mt-8 mb-8 text-white text-2xl font-semibold'>Summary</h1>
                        <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                        <div className='flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between'>
                            <span>Subtotal</span>
                            <span>GHS {totalPrice}</span>
                        </div>
                        <div className='flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between'>
                            <span>VAT</span>
                            <span>GHS {vat}</span>
                        </div>
                        <div className='flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                        <div className='flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                            <span>Total</span>
                            <span>GHS {totalPriceWithVat}</span>
                        </div>
                        {!user &&(
                            <Link href={"/sign-in"}>
                                <Button className='bg-orange-500 w-full'>Sign In to Checkout</Button>
                            </Link>
                        )}
                        {user && (
                            // paypal Button
                            //<Button className='w-full bg-orange-500'>Paypal</Button>
                            <PayPalButton amount={totalPriceWithVat} onSuccess={handleSuccess}/>
                        )}
                    </div>

                </div>
            </div>
        )}

    </div>
  )
}

export default Cart