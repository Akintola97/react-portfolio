import React from 'react'


const Experience = () => {
  return (
    <div name ='experience' className='bg-gradient-to-b  from-black via-black to-gray-800 h-screen w-full'>
    <div className='w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
        <h1 className='text-center text-[6vmin] font-bold'>Experience</h1>
        </div>
        <div className='flex flex-row justify-evenly py-12'>
        <div className=' text-white text-center'>
            <h1 className='text-[4.5vmin] font-cursive'>Frontend</h1>
            <div>
                <p className='p-5 text-[2.2vmin]'>HTML</p>
                <p className='text-[2.2vmin]'>CSS</p>
                <p className='p-5 text-[2.2vmin]'>REACT</p>
                <p className='text-[2.2vmin]'>JAVASCRIPT</p>
               
            </div>
            
        </div>
        <div className=' text-white text-center'>
            <h1 className='text-[4.5vmin] font-cursive'>Backend</h1>
            <div>
                <p className='p-5 text-[2.2vmin]'>PYTHON</p>
                <p className='text-[2.2vmin]'>NODE.JS</p>
                <p className='p-5 text-[2.2vmin]'>SQL</p>
                <p className='text-[2.2vmin]'>MONGODB</p>
            </div>
        </div>
        <div className=' text-white text-center'>
            <h1 className='text-[4.5vmin] font-cursive'>Frameworks</h1>
            <div>
                <p className='p-5 text-[2.2vmin]'>EXPRESS</p>
                <p className='text-[2.2vmin]'>DJANGO</p>
                <p className='p-5 text-[2.2vmin]'>BOOTSTRAP</p>
                <p className='text-[2.2vmin]'>TAILWIND</p>
            </div>
        </div>
        </div>
    </div>
    </div>
   
   
  )
}

export default Experience

