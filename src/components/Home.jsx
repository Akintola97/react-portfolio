import React from 'react'


const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-md flex flex-col items-center justify-center mx-auto h-full'>
            <div>
                <h1 className='text-center py-7 text-[6vmin] font-bold'>
                    I AM AKIN
                </h1>
                <h2 className='text-center text-[4vmin]'>
                   FULLSTACK WEB DEVELOPER
                </h2>
                <p className='md:text-[2.75vmin] py-7 px-10 text-left text-[3vmin]'>
                Hi! My name is Akin. I am a Full Stack Web Developer and an avid strength athlete. As a developer, I've been honing my skills by developing web applications using various coding languages and frameworks. I aim to create simple, yet modern style web applications that can be scaled for various tasks and purposes. Feel free to explore my personal projects and resume found on this site.
                </p>
                <div className='text-center flex-row'>
                <a className = 'pr-5' href="https://docs.google.com/document/d/e/2PACX-1vRFC-5BBqbX6b1VJ0uXgcmrDTw5pCQeqAUIP_Mevr7YvOUpHd66zyT8GsZlS22L-g/pub" rel="noreferrer" target="_blank"><button className='border p-2 md:text-[2.5vmin] rounded-lg bg-gradient-to-r from-cyan-500 to to-blue-500 duration-200 hover:scale-125'>Resume</button></a>
                <a href="https://linkedin.com/in/akintola-oyetayo25" rel="noreferrer" target="_blank"><button className='border p-2 md:text-[2.5vmin] rounded-lg bg-gradient-to-r from-cyan-500 to to-blue-500 duration-200 hover:scale-125'>LinkedIn</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home


