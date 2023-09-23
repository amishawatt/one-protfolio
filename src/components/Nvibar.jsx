import React,{useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo11.png'
import {Link} from 'react-scroll'

const Nvibar = () => {
    const [nav, setNav]=useState(false)
    const handleClick=() => setNav(!nav)
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo image" style={{width :'50px'}}/>
      </div>

      {/* menu */}
            <ul className='hidden md:flex'>
                <li> <Link to="home" smooth={true} duration={500} >
                Home
                </Link></li>
                <li><Link to="aboutme" smooth={true} duration={500} >
                 About Me
                </Link></li>
                <li><Link to="skills" smooth={true} duration={500} >
                Skills
                </Link></li>
                <li><Link to="work" smooth={true} duration={500} >
                My Work
                </Link></li>
                <li><Link to="contact" smooth={true} duration={500} >
                 Contact
                </Link></li>
            </ul>


      {/* handburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        

      {/*mobile menu */}
      <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f]  flex flex-col justify-center items-center'}>
            <li className='py-6 text 4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >
                Home
                </Link></li>
            <li className='py-6 text 4xl'><Link onClick={handleClick} to="aboutme" smooth={true} duration={500} >
                 About Me
                </Link></li>
            <li className='py-6 text 4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                Skills
                </Link></li>
            <li className='py-6 text 4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} >
                My Work
                </Link></li>
            <li className='py-6 text 4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                 Contact
                </Link></li>
      </ul>


      {/* social icons  , give href links to your profiles */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114791_asid.148989926103_crid.662526547908_kw.www%20linkedin%20com_d.c_tid.kwd-2246448002_n.g_mt.p_geo.9149398&mcid=6844056167778418688&cid=&gclid=CjwKCAjwmbqoBhAgEiwACIjzEKKsO_QNrm-RJCl7XqRluF-LVaT2G2X21m0hI9NIumovwhSZL4lBFhoCpCQQAvD_BwE&gclsrc=aw.ds'>
                    linkedin <FaLinkedin  size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='/'>
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='/'>
                    Email <HiOutlineMail  size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='/'>
                    Resume <BsFillPersonLinesFill  size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Nvibar
