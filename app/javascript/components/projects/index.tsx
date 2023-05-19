import React from 'react'
import data from './data.json'
import ProjectCard from './components/card/card'

const Projects = () => (
    <main className='w-screen px-4 sm:px-40'>
        <div className='flex max-w-full flex-wrap gap-4 justify-center mt-6 sm:mt-10'>
            {
                data.projects.map(p => <ProjectCard data={p} />)
            }
        </div>
    </main>
)

export default Projects