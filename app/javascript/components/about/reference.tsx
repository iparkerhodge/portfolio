import React from 'react'

interface Reference {
    data: JSON
}

const Reference = ({ data }) => {
    const formatString = (data: string) => {
        return data.replaceAll(/\n/g, '<br />')
    }
    return (
        <div className='col-span-2'>
            <div className='mb-2'>
                <h4 className='font-bold'>{data.name}</h4>
                <a className='text-blue-600 hover:underline' href={data.linkedIn}>{data.title} at {data.employer}</a>
            </div>
            <div className='italic' dangerouslySetInnerHTML={{ __html: formatString(data.data) }} />
        </div>
    )
}

export default Reference