import React from 'react'

const ProjectCard = ({img, category, title}) => {
  return (
    <div>
        <img src={img} className="max-h-64 w-full object-cover rounded-xl" alt=""/>
        <h6 className='uppercase text-[#652020] font-medium mt-2'>{category}</h6>
        <h4 className='text-primaryText font-semibold text-xl'>{title}</h4>
    </div>
  )
}

export default ProjectCard