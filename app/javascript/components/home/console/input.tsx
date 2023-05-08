import React, { useReducer } from 'react'
import { Action, consoleReducer, initialConsoleState } from './reducer'

const ConsoleInput: React.FC = () => {
    const [state, dispatch] = useReducer(consoleReducer, initialConsoleState)
    const handleValueChange = (e) => {
        dispatch(new Action.updateValue(e))
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(new Action.submitInput)
        }
    }

    return (
        <div>
            <div className='relative flex w-full'>
                <p className='z-10'>{'>'}</p>
                <input className='absolute bg-transparent pl-3 hide-focus w-full' onChange={handleValueChange} onKeyDown={handleKeyDown} />
            </div>
        </div>
    )
}

export default ConsoleInput