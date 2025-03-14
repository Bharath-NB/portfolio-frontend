import React from 'react'
import HeroImage from '../assets/hero-image.png'
import Resume from '../assets/FullStackResume.pdf'  // Import your resume file

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="Profile" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Bharath</span>
            , Full-Stack Developer
        </h1>
        
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        
        <div className='mt-8 space-x-4'>
            <a 
                href={Resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            >
                View Resume
            </a>

            <button
    className='bg-gradient-to-r from-green-400 to-blue-500 text-white
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
    onClick={() => window.open('/certificates/FullStackDeveloper.PNG', '_blank')}
>
    View overall certificate
</button>

        </div>
    </div>
  )
}

export default Hero
