import React from 'react'
import Image from 'next/image'
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';
const page = () => {
  return (
    <div className='w-full'>
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
            <Image className='absolute z-0' layout='fill' objectFit='cover' src="/assets/Projects/pomodoro.png" alt='no image'></Image>
            <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-x-y[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Pomodoro Timer</h2>
              <h3>React Js / TypeScript</h3>
            </div>
        </div>
        <div>
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p className='text-xl tracking wildest'>Project</p>
              <h2 className='py-2'>Overview</h2>
              <p className='py-2'>
                Pomodoro is a popular time management technique that break work into small chunks to improve productivity.
                This app is built with React Js and TypeScript.It has a timer that runs for 25 minutes and then takes a break for 5 minutes. The user can also customize the timer according to their needs.
              </p>
              <a href="https://jocular-sprinkles-ac3f39.netlify.app/" target='_blank' rel='noreferrer'>
              <button className="px-8 py-2 mt-4 mr-8">View</button>
              </a>
              <a href="https://github.com/gia-thinh-nguyen/pomodoro" target='_blank' rel='noreferrer'>
                <button className="px-8 py-2 mt-4">Github</button>
              </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-500 rounded-xl p-4'>
              <div className="p-2">
                <h4 className='text-center font-bold '>Technologies:</h4>
                <div className='py-2 grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'><IoMdArrowDropright/>React</p>
                  <p className='text-gray-600 py-2 flex items-center'><IoMdArrowDropright/>TypeScript</p>
                  <p className='text-gray-600 py-2 flex items-center'><IoMdArrowDropright/>Css</p>
                  <p className='text-gray-600 py-2 flex items-center'><IoMdArrowDropright/>HTML</p>
                </div>
              </div>
              
            </div>
            <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
          </div>
        </div>
    </div>
  
  )
}

export default page