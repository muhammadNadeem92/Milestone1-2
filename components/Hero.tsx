import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
     <section className='w-screen flex pt-8'>
      <div className='w-1/2 flex-colx items-center py-16 mb-6 px-4'>
      <h1 className='font-bold text-[72px]  leading-[1.25]  hover:text-orange-500'><span className='text-orange-500 hover:text-white'>Better Solution</span> For Your Coding Problems</h1>
      <br />
      <p className=' text-wrap font-medium text-[18px] tracking-wide '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta reiciendis ex ullam ipsum.</p>
        <div className='mt-4 '>
        <button className='border rounded-lg text-xl bg-blue-500 py-4 px-14 hover:bg-orange-500'>Explore more</button>
        </div>
      </div>
      <div className='w-1/2'>
        <Image src={'/images/code-image.png'} alt='Hero_image' width={600} height={600} className='border border-hidden  mt-16 hover:rounded-ee-full hover:opacity-65 '/>
      </div>
     </section>
    </div>
  )
}

export default Hero