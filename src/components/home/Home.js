import React from 'react'
import { ReactComponent as Nashville } from '../../images/Nashville.svg'
import { Transition } from 'react-spring/renderprops'
import './Home.css'
import TopNav from './TopNav'

const Home = () => {
    return (
        <div className='homeContainer'>
            <Transition
            items={ShadowRoot}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
                {show => show && (props =>
                    <TopNav style={props} className='cardList'/>
                )}
            </Transition>
            <Transition
                items={ShadowRoot}
                from={{ transform: 'translate3d(0,-80px,0)', opacity: 0 }}
                enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                leave={{ transform: 'translate3d(0,-80px,0)', opacity: 0 }}>
                {show => show && (props =>
                    <div className='name' style={props}>Parker Hodge</div>
                )}
            </Transition>
            <Transition
                items={ShadowRoot}
                trail={1000}
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

