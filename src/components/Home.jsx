import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
<div name='home' className='w-full h-screen  bg-[#0a192f]'>

    {/* COMTAINER */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is  </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Amisha Joshi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I am a Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>With a deep-rooted love for technology and a commitment to continuous learning,
         I am a developer who embraces challenges and enjoys crafting software
         that not only meets user needs but also exceeds their expectations.</p>
         <div>
            <button className='text-white border-2 px-8 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work {/* give a link to github */}
            <span className='hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
        </div>

    </div>
</div>
  )
}

export default Home
