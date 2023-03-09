import React from 'react'
import person from '../person.png'
import Clients from './Clients'

const HeroSection = () => {
  return (
    <div className='md:flex md:flex-row md:h-[55vh] h-screen justify-center items-center'>
        
        <div className='h-2/4 pt-20 md:w-2/4'>
            <h2 className='text-2xl font-semibold text-secondaryText'>Hi, i'm Lucas</h2>
            <h1 className='text-4xl font-semibold text-primaryText'>Web Developer & Designer</h1>
            <p className='text-regular font-semibold text-secondaryText mt-8'>I create custom, intuitive and responsive websites for clients, using the latest available technologies and tools.</p>
            <button type="button" className='bg-mainCta text-primaryText px-5 py-2 font-semibold rounded-lg mt-8'>Book a Call</button>
        </div>
        <div className='h-1/4 relative md:w-2/4 md:h-auto w-full'>
            <img src={person} className="absolute scale-150 -right-24 bottom-16 md:-right-16 md:bottom-32 h-auto"/>
        </div>
        <Clients />
    </div>

  )
}

export default HeroSection