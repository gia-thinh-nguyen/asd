import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-[55vh] p-2 flex item-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl tracking-widest uppercase text-red-500'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2'>I am Gia Thinh Nguyen but you can call me Tim. I am an ethusiastic developer based in Melbourne. 📍 Although my main stack currently is Next/React.js in combination with Tailwind CSS and TypeScript,
                  I am a quick learner and can pick up new tech stacks as needed. I beleive my passion, ambition as well as my effective problem-solving and comunication skills will place me a valuable team player </p>
                <div className='py-2'></div>
                <Link href='/#projects'><p className='text-red-500 cursor-pointer underline'>Check out some of my latest projects</p></Link>
                
            </div>
            <div>
                <img src="/assets/peanut.jpg" alt="no img" className='h-[90%] w-auto' />
            </div>
        </div>
    </div>
  )
}

export default About