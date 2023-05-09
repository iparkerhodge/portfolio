import React, { useEffect, useReducer } from 'react'
import { Action, consoleReducer, initialConsoleState } from './reducer'

const ConsoleInput: React.FC = () => {
    const [state, dispatch] = useReducer(consoleReducer, initialConsoleState)
    const handleValueChange = (e) => {
        dispatch(new Action.UpdateValue(e))
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && state.loading === false) {
            dispatch(new Action.SubmitInput)
        }
    }

    useEffect(() => {
        if (state.submittedInput === undefined) {
            return
        }

        const timer = setTimeout(() => {
            dispatch(new Action.ResponseToInput(state.submittedInput))
        }, 500);
        return () => clearTimeout(timer);
    }, [state.submittedInput])

    return (
        <div>
            {Object.keys(state.logs).length > 0 &&
                Object.keys(state.logs).map((k) => {
                    const log = state.logs[k]
                    if (log === "") {
                        return <p key={k}>&nbsp;</p>
                    }
                    else {
                        return <div key={k} dangerouslySetInnerHTML={{ __html: log }} />
                    }
                })
            }
            <div className='relative flex w-full'>
                {!state.loading &&
                    <p className='z-10'>{'>'}</p>
                }
                <input className='absolute bg-transparent pl-3 hide-focus w-full' onChange={handleValueChange} onKeyDown={handleKeyDown} value={state.currentValue} />
            </div>
        </div>
    )
}

export default ConsoleInput