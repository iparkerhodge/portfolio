import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from '../../images/me_cropped.png'
import Briefcase from '../../images/briefcase.svg'

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

const TopNav = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <img src={Image} className='profileImage'/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopNav