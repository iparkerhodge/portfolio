import React, { useState } from 'react'
import ConsoleInput from './input'
import info from '../../../../assets/icons/info.svg'

const Console: React.FC = () => {
    const [tooltip, showTooltip] = useState(false)

    const toggleTooltip = (_e: React.MouseEvent<HTMLImageElement>) => {
        showTooltip(!tooltip)
    }

    return (
        <div className='relative text-white text-xs p-4'>
            <p className={`absolute right-1 -top-4 bg-gray-500 p-1 ${tooltip ? 'inline' : 'hidden'}`}>
                Type 'help' on the command line and press 'return' to see a list of commands.
            </p>
            <img src={info} className='absolute right-1 top-1 cursor-pointer' height={18} width={18} onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip} />
            <ConsoleInput />
        </div>
    )
}

export default Console