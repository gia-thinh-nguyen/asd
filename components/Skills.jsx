import React from 'react'
import Image from 'next/image'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-wildest uppercase text-red-500'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className="p-6 shadow-xl shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/nextjs.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>Next.Js</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/react.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>React.Js</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/typescript.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/javascript.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/html.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/css.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/tailwind.png' alt="no img" width='50' height='50' />
                        </div>
                        <div>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl  shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/skills/mongodb.png' alt="no img" width='25' height='25' />
                        </div>
                        <div>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills