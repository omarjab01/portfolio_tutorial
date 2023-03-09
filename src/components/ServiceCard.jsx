import React from 'react'

const ServiceCard = ({children, name, desc, color}) => {
  return (
    <div className='w-full p-8 rounded-xl bg-secondarySection'>
        <div className='flex flex-row gap-8 items-center'>
            <div className={`w-14 h-14 rounded-full text-white text-3xl flex justify-center items-center`} style={{backgroundColor: color}}>
                {children}
            </div>
            <span className='text-primaryText font-medium text-xl'>{name}</span>
        </div>
        <p className='mt-4 text-secondaryText leading-[1.2rem] font-medium'>{desc}</p>
    </div>
  )
}

export default ServiceCard