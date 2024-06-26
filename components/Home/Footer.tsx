import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 pb-12'>
        {/* Defining grid system*/}
        <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {/*First part*/}
            <div>
                <h1 className='text-[25px] capitalize font-semibold text-black mt-4'>DAN SHOP</h1>
                <p className='text-sm text-black opacity-60'>
                  This Ecommerce website is designed to provide customers with a great product that will help customers with products. This website is beginner introduction to React.
                </p>
                <p className='text-sm text-black mt-6 opacity-90'>Phone: +233 241687116 <br /> <a href="mailto:dannychemm121@gmail.com">Email: dannychemm121@gmail.com</a></p>
            </div>
            {/*Second part*/}
            <div className='lg:mx-auto'>
              <h1 className='footer__title'>Information</h1>
              <p className='footer__link'>About Us</p>
              <p className='footer__link'>Privacy Policy</p>
              <p className='footer__link'>Return Policy</p>
              <p className='footer__link'>Drop Shipping Policy</p>
            </div>
            {/*Third part*/}
            <div className='lg:mx-auto'>
              <h1 className='footer__title'>Account</h1>
              <p className='footer__link'>Dashboard</p>
              <p className='footer__link'>My Orders</p>
              <p className='footer__link'>Account Details</p>
              <p className='footer__link'>Track Orders</p>
              
            </div>
             {/* Fourth part*/}
             <div className='lg:mx-auto'>
              <h1 className='footer__title'>Shop</h1>
              <p className='footer__link'>Affiliate</p>
              <p className='footer__link'>Best Sallers</p>
              <p className='footer__link'>Latest Products</p>
              <p className='footer__link'>Sales Products</p>
              
            </div>
        </div>
        {/* Fourth part*/}
        <div className='mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 justify-between w-[80%] mx-auto'>
        <p className='text-sm text-black opacity-90'>@ Copyright Danny 24</p>
        <Image src={"/images/pay.svg"} alt='payment' width={230} height={230} className='object-contain sm:ml-auto h-auto w-auto'/>
        </div>
    </div>
  )
}

export default Footer
