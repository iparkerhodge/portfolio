import React from 'react'
import ProjectCardTags from './cardTags'
import gh from '../../../../../assets/images/github-inverted.svg'

interface ProjectProps {
    data: {
        title: string
        img: string
        tags?: string[]
        desc?: string
        github: string
    }
}

const ProjectCard: React.FC<ProjectProps> = ({ data }) => {
    return (
        <div className='w-80 h-96 border-2 flex flex-col items-stretch shadow-md rounded-md pb-6'>
            <a href={data.github} target='_blank' className='cursor-pointer'>
                <div className='flex justify-center py-2'>
                    <img src={require(`../../../../../assets/images/${data.img}`)} className='rounded h-40 w-auto' />
                </div>
                <h2 className='px-4 font-black text-2xl'>{data.title}</h2>
                <div className='px-4 py-2'>
                    <ProjectCardTags tags={data.tags} />
                    <div>{data.desc}</div>
                </div>
            </a>
            <div className='px-4 h-full flex items-end'>
                {data.github &&
                    <a href={data.github} target='_blank'>
                        <img src={gh} width={20} />
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectCard