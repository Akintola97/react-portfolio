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
        name:'entertainment',
        image: entertainment,
        link: 'https://boltluna.io/entertainment/',
        website: "https://github.com/Akintola97/entertainment-search.git"},
        {
        id: 2,
        name:'gaming',
        image: gaming,
        link: 'https://boltluna.io/gaming',
        website: "https://github.com/Akintola97/IRIS.git"
         },
        {
        id: 3,
        name:'marvel',
        image: marvel,
        link: 'https://boltluna.io/marvel',
        website: "https://github.com/Akintola97/marvel-yt.git"
         },
        {
        id: 4,
        name:'netflix',
        image: netflix,
        link:'https://boltluna.io/netflix/',
        website: "https://github.com/Akintola97/netflix-clone.git"
         },
        {
        id: 5,
        name: 'news',
        image: news,
        link: 'https://news-project.onrender.com/',
        website: "https://github.com/Akintola97/news-project.git"

         },
        {
        id: 6,
        name:'weather',
        image: weather,
        link: 'https://boltluna.io/weather',
        website: "https://github.com/Akintola97/weather-node.git"
         }



]

  return (
    <>
   <div name = 'portfolio' className='w-full h-[100vh] bg-gradient-to-b from-black to-gray-800 text-white'>
    <div className='flex flex-col text-white justify-center items-center w-full h-full'>
  <h1 className='text-[6vmin] font-bold capitalize'>Portfolio</h1>
  <p className='py-5 text-[3.5vmin]'>Here are a couple of my personal projects</p>
  <div className='flex flex-wrap justify-center text-center'>
  {images.map((projects)=>{
       return( 
        <>
       <div className='shadow-gray-600 mr-5 mt-5 shadow-md rounded-lg'>
       <img className='w-[30vmin] lg:[50vmin] p-4 rounded-md'  src={projects.image} alt={projects.name}/>
       <p className='capitalize'>{projects.name}</p> 
                <div className='flex justify-evenly p-2 mb-5'>
                <a href={projects.link} rel="noreferrer" target="_blank"
                className='text-[2vmin]'>
                <button className='border p-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 to to-blue-500 duration-200 hover:scale-110'>Demo</button></a>
                <a href={projects.website} rel="noreferrer" target="_blank"
                className='text-[2vmin]'
                >
                <button className='border p-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 to to-blue-500 duration-200 hover:scale-110'>Code</button></a>
                </div>
                
       </div>
       </>
      )})}
  </div>
     
    </div>
 
    
   </div>
    </>
  )
}

export default Portfolio
