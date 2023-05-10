import React from 'react'
import memoji from '../../../assets/images/memoji.png'

const About = () => (
    <article className='mx-4 sm:mx-40'>
        <section className='mt-5 grid items-center grid-cols-4 sm:grid-cols-3 grid-rows-1'>
            {/* Image */}
            <div className='w-full col-start-1 flex'>
                <div className='bg-[#F1E0C5] w-fit rounded-full p-1 sm:pb-4 sm:pt-0 sm:px-2'>
                    <img src={memoji} className='h-20 sm:h-40 relative -top-2.5' />
                </div>
            </div>
            {/* Title */}
            <div className='col-start-2 col-span-2 sm:col-span-1 h-[176px] flex justify-center items-center'>
                <h1 className='justify-self-center font-bold text-xl sm:text-5xl text-center'>Parker Hodge</h1>
            </div>
            <div className='flex justify-center'>
                <ul>
                    <li className='h-4 sm:h-auto'><a href='#about-me' className='text-[10px] sm:text-base'>About Me</a></li>
                    <li className='h-4 sm:h-auto'><a href='#experiences' className='text-[10px] sm:text-base'>Experiences</a></li>
                    <li className='h-4 sm:h-auto'><a href='#references' className='text-[10px] sm:text-base'>References</a></li>
                    <li className='h-4 sm:h-auto'><a href='#test' className='text-[10px] sm:text-base'>Something Else</a></li>
                </ul>
            </div>
        </section>
        <section id='about-me' className='sm:mt-10 grid grid-cols-3'>
            <h3 className='text-semibold underline decoration-red-600 text-lg sm:text-3xl'>About Me</h3>
            <div className='col-span-2 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </section>
        <section id='experiences' className='mt-7 grid grid-cols-3'>
            <h3 className='text-semibold underline decoration-red-600 text-lg sm:text-3xl'>Experiences</h3>
            <div className='col-span-2 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </section>
        <section id='references' className='mt-7 grid grid-cols-3'>
            <h3 className='text-semibold underline decoration-red-600 text-lg sm:text-3xl'>References</h3>
            <div className='col-span-2 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </section>
        <section id='test' className='mt-7 grid grid-cols-3'>
            <h3 className='text-semibold underline decoration-red-600 text-lg sm:text-3xl'>Something Else</h3>
            <div className='col-span-2 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </section>
    </article>
)

export default About