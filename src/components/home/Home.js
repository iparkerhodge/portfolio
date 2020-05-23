import React, { useState, useEffect } from 'react'
import { ReactComponent as Nashville } from '../../images/Nashville.svg'
import { Transition } from 'react-spring/renderprops'
import { Fade } from '@material-ui/core'
import './Home.css'

const Home = () => {
    const [fade, set] = useState(false)

    useEffect(() => {
        setTimeout(() => {set(true)}, [300])
    }, [])

    return (
        <div className='homeContainer'>
            <Transition
                items={ShadowRoot}
                from={{ transform: 'translate3d(0,-80px,0)', opacity: 0 }}
                enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                leave={{ transform: 'translate3d(0,-80px,0)', opacity: 0 }}>
                {show => show && (props =>
                    <div className='info'>
                        <div className='name' style={props}>Parker Hodge</div>
                        <Fade in={fade}>
                            <div className='description'>software developer</div>
                        </Fade>
                    </div>
                )}
            </Transition>
            <Transition
                items={ShadowRoot}
                trail={500}
                from={{ transform: 'translate3d(0,80px,0)', opacity: 0 }}
                enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                leave={{ transform: 'translate3d(0,80px,0)', opacity: 0 }}>
                {show => show && (props =>
                    <div className='homeImageContainer' style={props}>
                        <Nashville className='homeImage' />
                    </div>
                )}
            </Transition>
        </div >
    )
}

export default Home

