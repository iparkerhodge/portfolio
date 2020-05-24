import React, { useState, useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import TopNav from './components/nav/TopNav'
import './Portfolio.css'
import Home from './components/home/Home'
import AboutMe from './components/about/AboutMe'

const items = ['welcome', 'to', 'my', 'portfolio']
const config = { mass: 5, tension: 2000, friction: 200 }

const Portfolio = () => {
    const [page, setPage] = useState('about')
    const [current, setCurrent] = useState()
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 1, x: 0, height: 0 },
    })

    const changePage = () => {
        setTimeout(() => {
            setPage('home')
        }, 800)
    }

    const welcome = (
        <div className='welcomeContainer' onClick={() => {
            set(state => !state)
            changePage()
        }}>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={items[index]}
                    className="trails-text welcomeMessage"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
        </div>
    )

    const home = (
            <Home />
    )

    const about = (
        <AboutMe />
    )

    useEffect(() => {
        if (page === 'welcome') {
            setCurrent(welcome)
        }
        else if (page === 'home') {
            setCurrent(home)
        }
        else if (page === 'about') {
            setCurrent(about)
        }
    }, [page])

    return (
        <div>
            {(page !== 'welcome') ? <TopNav page={page} setPage={setPage}/> : ''}
            {current}
        </div>
    )
}

export default Portfolio