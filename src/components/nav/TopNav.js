import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Tabs, Tab, Fade } from '@material-ui/core'

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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
}));

const TopNav = ({ page, setPage }) => {
    const [activate, setActivate] = useState(false)
    const classes = useStyles()
    const handleChange = (e, newValue) => {
        setPage(newValue)
    }

    useEffect(() => {
        setTimeout(() => {
            setActivate(true)
        }, 1000)
    }, [])

    return (
        <Fade in={activate}>
            <div className={classes.root}>
                <AppBar>
                    <Toolbar className={classes.toolbar}>
                        <Tabs value={page} onChange={handleChange} variant={'standard'}>
                            <Tab label="Home" value={'home'}></Tab>
                            <Tab label="About Me" value={'about'}></Tab>
                            <Tab label="Projects" value={'projects'}></Tab>
                            <Tab label="technologies" value='techs'></Tab>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        </Fade>
    )
}

export default TopNav