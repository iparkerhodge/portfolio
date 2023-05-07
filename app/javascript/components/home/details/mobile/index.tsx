import React from 'react'

const MobileDetails: React.FC = () => (
    <div className='h-1/2 mx-6'>
        <div className='text-3xl mb-6 grid grid-cols-4 items-center mt-6'>
            <span role="img" aria-label="wave" className='text-5xl justify-self-center'>👋</span>
            <div className='col-span-3 flex flex-col'>
                <div className='whitespace-nowrap'>Hi! I am</div>
                <div className='whitespace-nowrap underline decoration-red-600 font-bold'>Parker Hodge</div>
            </div>
        </div>
        <div className='mb-6 w-full text-xs'>I'm a software engineer with over 4 years of experience in full-stack development!</div>
        <div className='flex items-center'>
            <button className='py-3 px-8 bg-red-600 text-white flex justify-center items-center text-bold'>Hire Me</button>
            <a className='ml-6 cursor-pointer'>Projects <span className='text-xl relative top-0.5'>↗</span></a>
        </div>
    </div>
)

export default MobileDetails