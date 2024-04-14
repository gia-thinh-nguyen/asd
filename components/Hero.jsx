import React from 'react'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import RedirectItems from './RedirectItems'

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                <div className='py-4 pt-2 flex flex-row justify-center items-center gap-2'>
                  <h1 className=' flex mt-[20px]'>Hi, I'm </h1>
                  <img src="/assets/logo.png" alt="/" className='flex'/>
                </div>
                <h1 className='py-2'>A Full-stack Developer</h1>
                <p className='text-sm tracking-widest text-gray-600 py-5'>I have been passionate about coding and always thriving to deliver the best prducts</p>
                <div className='flex justify-between items-center py-4 m-auto max-w-[350px] lg:max-w-[420px]'>
                <RedirectItems redirectUrl='https://www.linkedin.com/in/gia-thinh-nguyen-557204300/' Icon={FaLinkedin} size={22} extraClass="size-[65px] lg:size-[70px] flex items-center justify-center p-6" target='_blank' />
                <RedirectItems redirectUrl='https://github.com/gia-thinh-nguyen' Icon={FaGithub} size={22} extraClass="size-[65px] lg:size-[70px] flex items-center justify-center p-6" target='_blank' />
                <RedirectItems redirectUrl='#contact' Icon={SiGmail} size={22} extraClass="size-[65px] lg:size-[70px] flex items-center justify-center p-6" target='_self' />
                <RedirectItems redirectUrl='/resume' Icon={BsFillPersonVcardFill} size={22} extraClass="size-[65px] lg:size-[70px] flex items-center justify-center p-6" target='_self' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero