import React from 'react';
import pomodoro from '../public/assets/Projects/pomodoro.png'
import drum from '../public/assets/Projects/drum.png'
import calculator from '../public/assets/Projects/calculator.png'
import quote from '../public/assets/Projects/quote.png'
import ProjectItems from './ProjectItems';



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className='text-xl tracking-wildest uppercase text-red-500'>Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ProjectItems title='Pomodoro' skills='React + Typescript' backgroundImg={pomodoro} projectUrl='/pomodoro'/>
                <ProjectItems title='Drum Machine' skills='React + Typescript' backgroundImg={drum} projectUrl='/'/>
                <ProjectItems title='Calculator' skills='React + Typescript' backgroundImg={calculator} projectUrl='/'/>
                <ProjectItems title='Random Quote' skills='React' backgroundImg={quote} projectUrl='/'/>
            </div>
            
        </div>

    </div>
  )
}

export default Projects