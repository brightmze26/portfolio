import React, {useState} from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='bg-black flex justify-between items-center h-[100px] max-w-[1200px] mx-auto'>

        <h1 className='text-4xl primary-color font-style: italic underline decoration-neutral-500 underline hover:decoration-double'>..B'26</h1>
        <div className='text-5xl'>
          <a href='https://github.com/brightmze26' className='text-neutral-500'> 
          <AiFillGithub/>
          </a>
          <a href='https://www.linkedin.com/in/brightmze/' className='text-neutral-500'>
          <AiFillLinkedin/>
          </a>
        </div>

    </div>
  )
}

export default Navbar