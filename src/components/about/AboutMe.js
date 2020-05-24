import React, { useState, useEffect } from 'react'
import { Container, CardContent, Typography, Slide, Divider, 
    CardActionArea, ButtonGroup, IconButton } from '@material-ui/core'
import Github from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIn from '@material-ui/icons/LinkedIn'
import './AboutMe.css'
import Me from '../../images/me_cropped.png'

const AboutMe = () => {
    const [slide, set] = useState(false)

    useEffect(() => {
        setTimeout(() => { set(true) }, [300])
    }, [])

    const SpotifyWidget = () => {
        return (
            <iframe src="https://open.spotify.com/embed/playlist/7hML7C3HTEq0PH9BXdZj0I" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        )
    }

    return (
        <Container>
            <Slide in={slide} direction="right">
                <div className='about'>
                    <img className='about__image' src={Me} />
                    <CardContent className='about__main'>
                        <Typography variant='h1'>Parker Hodge</Typography>
                        <Typography variant='subtitle1'>A full-stack software engineer with a passion to design and create engaging web applications</Typography>
                        <Divider />
                        <CardActionArea>
                            <ButtonGroup>
                                <IconButton>
                                    <Github />
                                </IconButton>
                                <IconButton>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton>
                                    <Twitter />
                                </IconButton>
                            </ButtonGroup>
                        </CardActionArea>
                    </CardContent>
                    <CardContent>
                        <SpotifyWidget className='.spotify'></SpotifyWidget>
                    </CardContent>
                </div>
            </Slide>
        </Container>
    )
}

export default AboutMe