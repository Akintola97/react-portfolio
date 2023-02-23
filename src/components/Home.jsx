import React from 'react'


const Home = () => {
  return (
    <div name='home' className='h-screen w-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='w-full flex flex-col items-center justify-evenly mx-auto h-full'>
            <div>
                <h1 className='text-center text-[6vmin] font-bold'>
                    I AM AKIN
                </h1>
                <h2 className='text-center py-8 text-[3.5vmin]'>
                   FULLSTACK WEB DEVELOPER
                </h2>
                <p className='px-10 lg:px-40 text-center text-[2.5vmin]'>
                Hi! My name is Akin. I am a Full Stack Web Developer and an avid strength athlete. As a developer, I've been honing my skills by developing web applications using various coding languages and frameworks. I aim to create simple, yet modern style web applications that can be scaled for various tasks and purposes. Feel free to explore my personal projects and resume found on this site.
                </p>
                <div className='flex justify-center py-8'>
                <a className = 'pr-5 text-[2vmin]' href="https://docs.google.com/document/d/e/2PACX-1vRFC-5BBqbX6b1VJ0uXgcmrDTw5pCQeqAUIP_Mevr7YvOUpHd66zyT8GsZlS22L-g/pub" rel="noreferrer" target="_blank"><button className='border rounded-3xl p-2  rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 duration-200 hover:scale-125'>Resume</button></a>
                <a className='text-[2vmin]' href="https://linkedin.com/in/akintola-oyetayo25" rel="noreferrer" target="_blank"><button className='border p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 duration-200 rounded-3xl hover:scale-125'>LinkedIn</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home


