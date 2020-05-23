import React from 'react'
import { ReactComponent as Nashville } from '../../images/Nashville.svg'
import { Transition } from 'react-spring/renderprops'
import './Home.css'

const Home = () => {
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
                        <div className='description'>software developer</div>
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

