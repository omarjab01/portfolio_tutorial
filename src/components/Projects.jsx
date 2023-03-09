import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
        <h6 className='text-secondaryText text-2xl font-semibold'>Projects</h6>
        <div className='mt-8 flex flex-col gap-16'>
            <ProjectCard
                img = "https://www.apple.com/newsroom/images/values/diversity-inclusion/Apple-new-professional-training-hero_big.jpg.slideshow-xlarge_2x.jpg"
                category="Web Design"
                title = "Apple"
            />
            <ProjectCard
                img = "https://images.unsplash.com/photo-1532354058425-ba7ccc7e4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                category="Web Design"
                title = "Spotify"
            />
            <ProjectCard
                img = "https://images.unsplash.com/photo-1614909069855-0210f3f201a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                category="Web Design"
                title = "Tesla Web App"
            />
            <ProjectCard
                img = "https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage-august.jpg"
                category="Web Design"
                title = "Amazon"
            />
        </div>
    </div>
  )
}

export default Projects