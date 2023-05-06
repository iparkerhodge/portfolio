import React from 'react'
import memoji from '../../../../assets/images/memoji.png'
import ruby from '../../../../assets/images/ruby.png'
import react from '../../../../assets/images/react.png'
import ts from '../../../../assets/images/ts.png'
import python from '../../../../assets/images/python.png'
import MobileHero from './mobile'
import { HeroImage } from './types'
import DesktopHero from './desktop'

const HeroProps: HeroImage = {
    memoji: memoji,
    ruby: ruby,
    react: react,
    ts: ts,
    python: python
}

const Hero: React.FC = () => (
    <div className='w-full sm:w-1/2 bg-[#F1E0C5] flex items-center justify-center'>
        <MobileHero {...HeroProps} />
        <DesktopHero memoji={memoji} />
    </div>
)

export default Hero