import React from 'react'
import ProjectCardTags from './cardTags'
import kp from '../../../../../assets/images/kill_port.png'

interface ProjectProps {
    title?: string
    img: string
    tags?: string[]
    desc?: string
}

const ProjectCard: React.FC<ProjectProps> = ({ img, tags, title, desc }) => {
    return (
        <a className='w-80 h-96 border-2 flex flex-col shadow-md rounded-md cursor-pointer'>
            <div className='flex justify-center py-2'>
                <img src={require(`../../../../../assets/images/${img}`)} className='rounded h-40 w-auto' />
            </div>
            <h2 className='px-4 font-black text-2xl'>{title}</h2>
            <div className='px-4 py-2'>
                <ProjectCardTags tags={tags} />
                <div>{desc || 'desc'}</div>
            </div>
        </a>
    )
}

export default ProjectCard