import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

function Work() {
  return (
    <div  name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-centre w-full h-full '>
            <div className='pb-8 '>
               <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
               <p className='text-xl py-6'>// check out some of my recent works </p> 
            </div>
            {/* containor */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 

            {/* grid item */}

            <div style={{ backgroundImage: `url(${WorkImg})` }} 

            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              React Js Application 
             </span>
            <div>
             <a href="/">
              <button className='text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-leg'>Demo</button>
            </a>
            <a href="/">
              <button className='text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-leg'>Code</button>
            </a>
      </div>
    </div>
  </div> 
  <div style={{ backgroundImage: `url(${realEstate})` }} 

  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
      {/* hover effect */}
      <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            React Js Application 
          </span>
      <div>
          <a href="/">
           <button className='text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-leg'>Demo</button>
          </a>
      <a href="/">
            <button className='text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-leg'>Code</button>
          </a>
        </div>
      </div>
  </div> 
  <div style={{ backgroundImage: `url(${realEstate})` }} 

  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
      {/* hover effect */}
      <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            React Js Application 
          </span>
      <div>
          <a href="/">
           <button className='text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-leg'>Demo</button>
          </a>
      <a href="/">
            <button className='text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-leg'>Code</button>
          </a>
        </div>
      </div>
  </div> 
  </div>
</div>
</div>
)
}

export default Work


  