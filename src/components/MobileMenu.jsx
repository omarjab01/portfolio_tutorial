import React, { forwardRef } from 'react'
import {IoMdClose} from 'react-icons/io'

const MobileMenu = forwardRef((props, ref) => {
  return (
    <div className='h-screen w-screen bg-background absolute top-0 left-0 z-20 md:hidden' ref={ref}>
        <ul className='flex flex-col items-center gap-6 text-primaryText w-full h-full justify-center'>
            <li>
                <a href="#" className='text-2xl'>Services</a>
            </li>
            <li>
                <a href="#" className='text-2xl'>Projects</a>
            </li>
            <li>
                <a href="#" className='text-2xl'>Blog</a>
            </li>
            <li>
                <a href="#" className='text-2xl'>About</a>
            </li>
        </ul>
        <IoMdClose className='text-primaryText absolute top-5 right-4 text-3xl' onClick={props.closeMenu} />
    </div>
  )
})

export default MobileMenu