import React from 'react'
import Hero from './hero'

const Home: React.FC = () => (
    <div className='flex w-full h-full flex-col-reverse sm:flex-row'>
        {/* Left Side */}
        <div className='w-full sm:w-1/2 h-full flex sm:justify-center sm:items-center mt-4 sm:mt-0'>
            {/* Top */}
            <div className='h-1/2 mx-6'>
                <div className='text-3xl sm:text-[60px] font-bold mb-6'>
                    <div className='whitespace-nowrap sm:leading-[3.5rem]'>Hi! I am
                        <span role="img" aria-label="wave" className='relative left-4 bottom-2 sm:left-14 sm:bottom-5 text-5xl sm:text-7xl'>👋</span>
                    </div>
                    <div className='whitespace-nowrap underline decoration-red-600 sm:leading-[3.5rem]'>Parker Hodge</div>
                </div>
                <div className='mb-6 w-full sm:w-2/3 text-xs'>A software engineer with over 4 years experience in full-stack development</div>
                <div className='flex items-center'>
                    <button className='py-3 px-8 bg-red-600 text-white flex justify-center items-center text-bold'>Hire Me</button>
                    <a className='ml-6 cursor-pointer'>Projects <span className='text-xl relative top-0.5'>↗</span></a>
                </div>
            </div>
            {/* Bottom */}
            <div className='h-1/2 bg-slate-200'>

            </div>
        </div>
        {/* Right Side */}
        <Hero />
    </div>
)

export default Home