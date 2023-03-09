import React, { useEffect, useRef } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import MobileMenu from './MobileMenu'
import gsap from 'gsap'

const Navbar = () => {

    const refMobile = useRef(null);

    useEffect(() => {
        gsap.from(refMobile.current, {
            xPercent: -100
        })
    }, [])

    const openMenu = () => {
        gsap.to(refMobile.current, {
            xPercent: 0,
            duration: 1.2,
            ease: 'power2.out'
        })
    }

    const closeMenu = () => {
        gsap.to(refMobile.current, {
            xPercent: -100,
            duration: 1.2,
            ease: 'power2.out'
        })
    }

  return (
    <div className='flex flex-row justify-between'>
        <a href='/' className='font-semibold text-2xl text-primaryText'>Lucas</a>
        <ul className='flex-row items-center gap-4 text-primaryText hidden md:flex'>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
        <BiMenuAltRight className='text-primaryText text-4xl md:hidden' onClick={openMenu}/>

        <MobileMenu 
            ref = {refMobile}
            closeMenu = {closeMenu}
        />

    </div>
  )
}

export default Navbar