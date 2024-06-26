import { getProductCategory, getSingleProduct } from '@/request/request'
import { Product } from '@/typings'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'

import React from 'react'
//import AddToCart from './add-cart'

const ProductDetails = async ({params}:{params:{id:string}}) => {
  const id = params.id
  const singleProduct:Product = await getSingleProduct(id)
  const relatedProduct:Product[] = await getProductCategory(singleProduct.category)
  console.log(relatedProduct)


  const num  = Math.round(singleProduct?.rating?.rate)
  const starArray = new Array(num).fill(0)
  return (
    <div className='mt-20'>
      {/* define the grid system*/}
      <div className='4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4'>
      
      {/* Image*/}
      <div className='col-span-3 mb-6 lg:mb-0'>
        <Image src={singleProduct.image} alt={singleProduct.title} width={400} height={400}/>
      </div>
      {/* Content*/}
      <div className='col-span-4'>
        <h1 className='lg:text-3xl text-2xl font-bold text-black'>{singleProduct.title}

        </h1>
        {/* Ratings*/}
        <div className='mt-2 flex items-center space-x-2'>
          <div className='flex items-center'>
            {starArray.map((star) =>{
              return <StarIcon key = {Math.random()*5000} size={20} fill='blue' className='text-blue'/>
            })}
          </div>
          <p className='text-base text-gray-700 font-semibold'>({(singleProduct?.rating?.count)} Reviews)</p>
        </div>
        {/* Line*/}
        <span className=' w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4'></span>
        {/* Price*/}
        <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold'>GHS {singleProduct?.price.toFixed(2)}</h1>
        {/* description*/}
        <p className='mt-4 text-base text-black opacity-70'>{singleProduct?.description}</p>
        {/* Extra Information*/}
        <p className='mt-4 text-black text-sm text-opacity-70 font-semibold'>Category : {singleProduct?.category}</p>
        <p className='mt-2 text-black text-sm text-opacity-70 font-semibold'>Tag : Shop, danny</p>
        <p className='mt-2 text-black text-sm text-opacity-70 font-semibold'>SKU : {Math.random()*500}</p>
        {/* AddTocart*/}
        
      </div>
        
        
      </div>
      <div className='4/5 mx-auto mt-16'>
      
        <h1 className='text-2xl text-black font-semibold'>Related Products</h1>
        </div>
    </div>
  )
}

export default ProductDetails