import React from 'react'

const Aboutme = () => {
  return (
    <div name='aboutme' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'> 
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              ABOUT
            </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> 
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I am Amisha, nice to meet you . Please take a look around ! </p>
                </div>
                <div>
                  <p className=' text-xl'>My journey in the world of development began with a fascination for how lines of code could bring ideas to life. Over the years, 
                    I have had the privilege of working on diverse projects, from building responsive web applications to developing robust backend and frontend systems.
                     This journey has not only expanded my technical expertise but has also taught me the importance of collaboration, adaptability, and continuous learning.</p>
                </div>
          </div> 
        </div>
    </div>
  )
}

export default Aboutme
