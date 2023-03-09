import React from 'react'
import ServiceCard from './ServiceCard'
import {BsVectorPen, BsLaptop, BsGraphUpArrow} from 'react-icons/bs'
import {FaWordpressSimple} from 'react-icons/fa'

const Services = () => {
  return (
    <div className='mb-16'>
        <h6 className='text-secondaryText text-2xl font-semibold'>Services</h6>
        <div className='mt-8 flex flex-col gap-4'>
            <ServiceCard color="#511765" name="Web Design" desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque facilis quos fugit nobis ut?">
                <BsVectorPen />
            </ServiceCard>
            <ServiceCard color="#653317" name="Web Development" desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque facilis quos fugit nobis ut?">
                <BsLaptop />
            </ServiceCard>
            <ServiceCard color="blue" name="Wordpress Site" desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque facilis quos fugit nobis ut?">
                <FaWordpressSimple />
            </ServiceCard>
            <ServiceCard color="green" name="Seo" desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque facilis quos fugit nobis ut?">
                <BsGraphUpArrow />
            </ServiceCard>
        </div>
    </div>
  )
}

export default Services