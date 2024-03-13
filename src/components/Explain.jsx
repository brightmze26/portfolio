import React from 'react'
import profilepic from '../img/me.png'
import { TypeAnimation } from 'react-type-animation'

const Explain = () => {
  return (
    <div className='bg-black grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>

      <div className='my-auto mx-auto w-[300px] h-auto lg:w-[400px] col-span-1 sm:w-[200px] max-lg:mx-auto max-sm:mx-auto'>
          <img className='rounded-full w-[350px] max-lg:w-[250px] max-sm:w-[350px]' src={profilepic} alt='profile pic'/>
      </div>            

      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span> <br/>
          <TypeAnimation
          sequence={[
            "Frontend Dev",
            1000,
            "Web Designer",
            1000,
            "Scriptwritter",
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl mx-3 '>
          Hi, I am Bright Misael Zega from Indonesia. 
        </p>

        <div className='my-8'>
            <a href='https://easyimg.io/i?url=ae6oc8oh4&name=cv-bright_misael_zega.jpg' className='text-black py-3 px-6 bg-primary-color rounded-full'>Download CV</a>
        </div>



      </div>       
    </div>

  )
}

export default Explain