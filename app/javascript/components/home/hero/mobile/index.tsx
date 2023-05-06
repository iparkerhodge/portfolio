import React from 'react'
import { HeroImage } from '../types'

const MobileHero: React.FC<HeroImage> = ({ memoji, python, ruby, react, ts }) => (
    <>
        <div className='absolute left-10 h-14 w-14 bg-white rounded-full sm:hidden'>
            <img src={ruby} className='relative h-9 w-9 left-2.5 top-2.5' />
        </div>
        <div className='absolute left-16 top-24 h-14 w-14 bg-white rounded-full sm:hidden'>
            <img src={react} className='relative h-9 w-9 left-2.5 top-2.5' />
        </div>
        <div className='absolute right-16 top-24 h-14 w-14 bg-white rounded-full sm:hidden'>
            <img src={ts} className='relative h-9 w-9 left-2.5 top-2.5' />
        </div>
        <div className='absolute right-10 h-14 w-14 bg-white rounded-full sm:hidden'>
            <img src={python} className='relative h-9 w-9 left-2.5 top-2.5' />
        </div>
        <img src={memoji} height={300} width={300} className='block sm:hidden' />
    </>
)

export default MobileHero