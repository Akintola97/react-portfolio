import React from 'react'


const Experience = () => {
  return (
    <div name ='experience' className='bg-gradient-to-b  from-black via-black to-gray-800 h-screen w-full'>
    <div className='max-w-screen-lg mx-auto flex flex-col justify-center md:px-10 w-full h-full text-white'>
        <div>
        <h1 className='text-center text-[6vmin] font-bold py-10'>Experience</h1>
        </div>
        <div className='flex flex-row justify-between'>
        <div className=' text-white text-center'>
            <h1 className='text-[5vmin] px-10 md:px-0 font-cursive'>Frontend</h1>
            <div>
                <p className='p-5'>HTML</p>
                <p>CSS</p>
                <p className='p-5'>REACT</p>
                <p>JAVASCRIPT</p>
               
            </div>
            
        </div>
        <div className=' text-white text-center'>
            <h1 className='text-[5vmin] font-cursive'>Backend</h1>
            <div>
                <p className='p-5'>PYTHON</p>
                <p>NODE.JS</p>
                <p className='p-5'>SQL</p>
                <p>MONGODB</p>
            </div>
        </div>
        <div className=' text-white text-center'>
            <h1 className='text-[5vmin] px-10 md:px-0 font-cursive'>Frameworks</h1>
            <div>
                <p className='p-5'>EXPRESS</p>
                <p>DJANGO</p>
                <p className='p-5'>BOOTSTRAP</p>
                <p>TAILWIND</p>
            </div>
        </div>
        </div>
    </div>
    </div>
   
   
  )
}

export default Experience

