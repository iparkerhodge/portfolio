import React, { useState, useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import { Transition } from 'react-spring/renderprops'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import './Portfolio.css'
import Home from './components/home/Home'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        backgroundColor: '#E9C46A',
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
}));

const items = ['welcome', 'to', 'my', 'portfolio']
const config = { mass: 5, tension: 2000, friction: 200 }

const TopNav = ({page, setPage}) => {
    const classes = useStyles()
    const handleChange = (e, newValue) => {
        setPage(newValue)
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Tabs value={page} onChange={handleChange}>
                        <Tab label="Home" value={'home'}></Tab>
                        <Tab label="About Me" value={'about'}></Tab>
                        <Tab label="Projects" value={'projects'}></Tab>
                        <Tab label="technologies" value='techs'></Tab>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const Portfolio = () => {
    const [page, setPage] = useState('welcome')
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
        <div className='about'>This is the about me page</div>
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
            {(page !== 'welcome') 
            ? <Transition
                items={ShadowRoot}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {show => show && (props =>
                    <TopNav style={props} className='cardList' page={page} setPage={setPage}/>
                )}
            </Transition>
            : ''}
            {current}
        </div>
    )
}

export default Portfolio