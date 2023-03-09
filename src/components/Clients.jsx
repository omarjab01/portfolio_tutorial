import React from 'react'

let googleLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
let teslaLogo = "https://www.freepnglogos.com/uploads/tesla-logo-png-27.png"
let spotifyLogo = "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
let netflixLogo = "https://pngimg.com/d/netflix_PNG15.png"


const Clients = () => {
  return (
    <div className='px-8 py-4 bg-secondarySection rounded-md h-36 relative flex flex-col justify-center'>
        <h6 className='text-secondaryText tracking-[0.5rem] text-xs text-center mb-8'>SOME OF MY CLIENTS</h6>
        <div className='flex flex-row gap-6 items-center justify-between'>
            <img src={googleLogo} className="grayscale opacity-30 h-8"/>
            <img src={teslaLogo} className="grayscale opacity-30 h-8"/>
            <img src={spotifyLogo} className="grayscale opacity-30 h-8"/>
            <img src={netflixLogo} className="grayscale opacity-30 h-8"/>
        </div>
    </div>
  )
}

export default Clients