import React from 'react'

interface ProjectCardTagsProps {
    tags: string[],
}

const ProjectCardTags: React.FC<ProjectCardTagsProps> = ({ tags }) => {
    const classes = {
        tag: 'rounded-xl w-fit px-2 text-xs py-0.5 ',
        bash: 'bg-black text-white',
        rails: 'bg-red-600 text-white',
        javascript: 'bg-yellow-400 text-white',
        typescript: 'bg-blue-600 text-white',
        ruby: 'bg-red-600 text-white',
        postgres: 'bg-gray-800 text-white'
    }

    const Tag = ({ name }) => <div className={classes.tag + classes[name]}>{name}</div>

    return (
        <div className='w-full flex gap-2 overflow-x-scroll pb-2.5 leading-4'>
            {tags && tags.length > 0 &&
                tags.map(t => <Tag name={t} />)
            }
        </div>
    )
}

export default ProjectCardTags