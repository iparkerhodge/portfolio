import React from 'react'

const DesktopDetails: React.FC = () => (
    <div className='h-full flex flex-col pt-8'>
        <div className='h-1/2 px-6'>
            <div className='text-[60px] font-bold mb-6'>
                <div className='whitespace-nowrap leading-[3.5rem]'>Hi! I am
                    <span role="img" aria-label="wave" className='relative left-14 bottom-5 text-7xl'>👋</span>
                </div>
                <div className='whitespace-nowrap underline decoration-red-600 sm:leading-[3.5rem]'>Parker Hodge</div>
            </div>
            <div className='mb-6 w-full sm:w-2/3 text-xs'>A software engineer with over 4 years experience in full-stack development</div>
            <div className='flex items-center'>
                <button className='py-3 px-8 bg-red-600 text-white flex justify-center items-center text-bold'>Hire Me</button>
                <a className='ml-6 cursor-pointer'>Projects <span className='text-xl relative top-0.5'>↗</span></a>
            </div>
        </div>
        <div className='w-full h-1/2 bg-black'>
            <p>hello</p>
        </div>
    </div>
)

export default DesktopDetails