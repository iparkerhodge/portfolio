import React from 'react'
import { HeroImage } from '../types'

const DesktopHero: React.FC<HeroImage> = ({ memoji }) => (
    <>
        <img src={memoji} height={300} width={300} className='hidden sm:block' />
    </>
)

export default DesktopHero