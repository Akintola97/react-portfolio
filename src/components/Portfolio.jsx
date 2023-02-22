import React from 'react'
import entertainment from '../images/entertainmentsearch.png'
import gaming from '../images/gaming-screenshot.png'
import marvel from '../images/marvel-app.png'
import netflix from '../images/netflix-clone.png'
import news from '../images/news-project.png'
import weather from '../images/weatherapp.png'

const Portfolio = () => {

    const images = [
    
        {
        id: 1,
        image: entertainment,
        link: 'https://boltluna.io/entertainment/',
        website: "https://github.com/Akintola97/entertainment-search.git"},
        {
        id: 2,
        image: gaming,
        link: 'https://boltluna.io/gaming',
        website: "https://github.com/Akintola97/IRIS.git"
         },
        {
        id: 3,
        image: marvel,
        link: 'https://boltluna.io/marvel',
        website: "https://github.com/Akintola97/marvel-app.git"
         },
        {
        id: 4,
        image: netflix,
        link:'https://boltluna.io/netflix/',
        website: "https://github.com/Akintola97/netflix-clone.git"
         },
        {
        id: 5,
        image: news,
        link: 'https://news-project.onrender.com/',
        website: "https://github.com/Akintola97/news-project.git"

         },
        {
        id: 6,
        image: weather,
        link: 'https://weather-app-62ae.onrender.com',
        website: "https://github.com/Akintola97/weather-node.git"
         }



]

  return (
    <>
    <div name='portfolio' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
        <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center items-center w-full h-full'>
        <div className='pb-8'>
            <h1 className='text-center text-[6vmin] font-bold'>Portfolio</h1>
            <p className='md:text-[4vmin] text-[3.5vmin] py-6'>Here are a couple of my personal projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12'>
            {images.map((projects)=>{
               return (
               <div className= 'shadow-md shadow-gray-600 rounded-lg'>
               <img src={projects.image} className='rounded-md' alt=''/>
               <div className = 'flex items-center justify-center'>
              <a href={projects.link} rel="noreferrer" target="_blank"><button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-125'>Demo</button></a>
              <a href={projects.website} rel="noreferrer" target="_blank"><button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-125'>Code</button></a>
                </div>
                </div>
               
            )})}
     
        </div>
        </div>
       
    </div>
   
    </>
  )
}

export default Portfolio
