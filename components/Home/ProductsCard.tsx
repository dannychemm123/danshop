"use client"
import { Product } from '@/typings'
import { HeartIcon, ShoppingBag, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/store/cartSlice'
import { RootState } from '@/store/store'
import { useToast } from '../ui/use-toast'

type Props = {
    product: Product
}

const ProductsCard = ({ product }: Props) => {
    const num = Math.round(product.rating.rate)
    const ratingArray = new Array(num).fill(0)
    const {toast} = useToast()
    
    const dispatch = useDispatch()
    const addToCartHandler = (product: Product)=>{
        toast({
            description: "Item added to cart",
            variant: "success"
        })
        dispatch(addItem(product))

     }

    return (
        <div className='p-4'>
            {/* Image */}
            <div className='w-[200px] h-[150px]'>
                <Image src={product.image} alt={product.title} width={100} height={100} className='w-[80%] h-[80%] object-contain' />
            </div>
            {/* Category */}
            <p className='mt-5 text-xs capitalize text-gray-600'>{product.category}</p>
            {/* Title */}
            <Link href={`/product/product-details/${product.id}`}>
                <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold'>{product.title}</h1>
            </Link>
            {/* Ratings */}
            <div className='flex items-center'>
                {ratingArray.map((_, index) => (
                    <StarIcon key={index} size={16} fill='blue' className='text-blue-500' />
                ))}
            </div>
            {/* Pricing */}
            <div className='flex mt-2 items-center space-x-2'>
                <p className='text-black text-base line-through font-semibold opacity-50'>{`GHS ${(product.price + 10).toFixed(2)}`}</p>
                <p className='text-black font-semibold opacity-80'>GHS {product.price}</p>
            </div>
            {/* Button*/}
            <div className='mt-4 flex items-center space-x-2'>
              <Button onClick={()=>(addToCartHandler(product))} size={"icon"}>
                <ShoppingBag size={18}/>
              </Button>
              <Button size={"icon"} className='bg-red-400'>
                <HeartIcon size={18}/>
              </Button>

            </div>
        </div>
    )
}

export default ProductsCard
