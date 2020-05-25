import React, { useState, useEffect } from 'react'
import './Projects.css'
import { Paper, IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Projects = () => {
    const [page, setPage] = useState(0)
    const [components, setComponents] = useState()

    const style = {
        position: 'relative',
        top: '43vh',
        zIndex: 2
    }

    const PageZero = () => (
        <Paper className='project' elevation={3}>
            I am project number one.
        </Paper>
    )

    const PageOne = () => (
        <Paper className='project' elevation={3}>
            I am project number two.
        </Paper>
    )

    const PageTwo = () => (
        <Paper className='project' elevation={3}>
            I am project number three.
        </Paper>
    )

    useEffect(() => {
        if(page === 0) {
            setComponents(PageZero)
        }
        if(page === 1) {
            setComponents(PageOne)
        }
        if(page === 2) {
            setComponents(PageTwo)
        }
    }, [page])

    const handleRightClick = (i) => {
        if(page < 2) {
            setPage(i + 1)
        }
        console.log('I was clicked')
    }

    const handleLeftClick = (i) => {
        if(page >= 0) {
            setPage(i - 1)
        }
        console.log('I was clicked')
    }

    return (
        <div className='projectsContainer'>
            <div className='arrowContainer' style={style}>
                <IconButton className='.arrowBtn--left' onClick={() => handleLeftClick(page)}>
                    <ArrowBackIosIcon className='.arrowBtn--left' />
                </IconButton>
                <IconButton className='.arrowBtn--right' onClick={() => handleRightClick(page)}>
                    <ArrowForwardIosIcon className='.arrowBtn--right' />
                </IconButton>
            </div>
            {components}
        </div>
    )
}

export default Projects
