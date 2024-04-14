import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const ProjectItems = ({title,skills,backgroundImg,projectUrl}) => {
  return (
    <div>
         <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-red-300 to-gray-500">
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="no img"  />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                    <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                    <p>{skills}</p>
                    <Link href={projectUrl}><p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer my-3'>More info</p></Link>
                </div>
        </div>
    </div>
  )
}

export default ProjectItems