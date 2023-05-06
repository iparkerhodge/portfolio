
import React from 'react'

const Header: React.FC = () => (
    <div className='mx-4 sm:mx-40 py-5 border-b-[1px] grid grid-cols-4 grid-rows-1 items-center'>
        <h1 className='font-bold text-xl sm:text-3xl'>Parker<span className='text-red-600'>.</span></h1>
        <ul className='col-span-2 justify-self-center flex justify-center'>
            <li className='px-2 text-xs sm:text-lg'>Home</li>
            <li className='px-2 text-xs sm:text-lg'>Resume</li>
            <li className='px-2 text-xs sm:text-lg'>About</li>
            <li className='px-2 text-xs sm:text-lg'>Projects</li>
        </ul>
        <button className='justify-self-end border-2 border-black py-2 px-2 sm:px-4 w-fit text-xs tracking-tight cursor-pointer font-semibold'>Let's Chat</button>
    </div >
)

export default Header