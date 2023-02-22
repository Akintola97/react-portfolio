import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import {Link} from 'react-scroll'


const Nav = () => {

    const [bars, setBars] = useState(false);
    const links = [
        {id: 1, 
        link: 'home'
        },  
        {id: 2, 
        link: 'portfolio'
        }, 
        {id: 3, 
        link: 'experience'
        }
    ];


  return (
    <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black p-5'>
    <div>
        <a href='/'><h1 className="text-5xl font-bold font-cursive capitalize">Akin</h1></a>
    </div>
    <ul className='hidden md:flex'>
        {links.map((tabs)=>{
            return <li key={tabs.id} className='cursor-pointer p-5 capitalize text-white font-[3vmin] hover:scale-105 duration-200'><Link to = {tabs.link} smooth='true' duration={500}>{tabs.link}</Link></li>
        })}
    </ul>
        <div onClick={()=>setBars(!bars)} className='cursor-pointer p-5 z-10 md:hidden'>
            {bars ? <FaTimes size={30} /> :  <FaBars size={30} /> }
        </div>

        {bars && (
              <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800'>
              {links.map((tabs)=>{
                  return <li key={tabs.id} className='p-5 cursor-pointer capitalize text-4xl'><Link onClick={()=> setBars(!bars)} to = {tabs.link} smooth='true' duration={500}>{tabs.link}</Link></li>
              })} 
              </ul>
        )}
      {console.log(bars)}


    </div>
  )
}

export default Nav