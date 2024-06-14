import Hero from '@/app/(root)/(home)/Hero'
import React from 'react'
import Category from './Category'
import AllProducts from './AllProducts'



const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <AllProducts/>
    </div>
  )
}

export default Home