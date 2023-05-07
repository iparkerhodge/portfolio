import React from 'react'
import Hero from './hero'
import MobileDetails from './details/mobile'
import DesktopDetails from './details/desktop'

const Home: React.FC = () => (
    <div className='flex w-full h-full flex-col-reverse sm:flex-row'>
        {/* Left Side */}
        <div className='w-full h-full flex sm:hidden'>
            <MobileDetails />
        </div>
        <div className='w-1/2 h-full flex justify-center items-center hidden sm:inline'>
            <DesktopDetails />
        </div>
        {/* Right Side */}
        <Hero />
    </div>
)

export default Home