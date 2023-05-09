import React from 'react'
import gh from '../../../assets/images/github-inverted.svg'
import tw from '../../../assets/images/twitter-inverted.svg'
import li from '../../../assets/images/linkedin-inverted.svg'
import web from '../../../assets/icons/website.png'

const Resume = () => {
    const classes = {
        name: 'font-black text-5xl leading-[56px]',
        section: 'mt-10 grid grid-cols-3',
        sectionLeft: 'col-span-2 border-t-4 border-black ml-6',
        title: 'mt-2 font-black text-2xl text-red-600',
    }

    return (
        <article className='w-screen px-40 font-lato pb-20'>
            <section className={classes.section}>
                <div className='col-span-1'>
                    <h1 className={classes.name}>Parker</h1>
                    <h1 className={classes.name}>Hodge</h1>
                    <h3 className={classes.title}>Software Developer</h3>
                </div>
                <div className='border-t-4 border-black col-span-2 mt-7 ml-6 pt-4 grid grid-cols-2'>
                    <div>
                        <p>1409 Stratton Ave</p>
                        <p>Nashville, TN 37206</p>
                        <br />
                        <p>615.497.3661</p>
                        <p>iparkerhodge@gmail.com</p>
                    </div>
                    <div className='grid grid-cols-6 grid-rows-4 items-center'>
                        <img src={web} className='h-4' />
                        <p className='text-xs col-span-5'>parkerhodge.me</p>
                        <img src={li} className='h-4' />
                        <p className='text-xs col-span-5'>linkedin.com/in/iparkerhodge</p>
                        <img src={tw} className='h-4' />
                        <p className='text-xs col-span-5'>github.com/iparkerhodge</p>
                        <img src={gh} className='h-4' />
                        <p className='text-xs col-span-5'>twitter.com/parkerhodgedev</p>
                    </div>
                </div>
            </section >
            <section className={classes.section}>
                <div className='col-span-1 w-full mt-1'>
                    <div className='w-[20px] border-b-2 border-black'></div>
                    <p className='font-black mt-2.5 text-lg'>Skills</p>
                </div>
                <div className={classes.sectionLeft}>
                    <p className='pt-4'>I am a full-stack developer with 4 years of experience in developing web applications.
                        I have a strong understanding of the Ruby on Rails and React frameworks, I have proficient knowledge of the ruby,
                        JS/TS, and SQL languages and some experience with C# and python, and I have worked professionally with AWS, Heroku,
                        Redis, Docker, Elasticsearch and Algolia.</p>
                </div>
            </section>
            <section className={classes.section}>
                <div className='col-span-1 w-full mt-1'>
                    <div className='w-[20px] border-b-2 border-black'></div>
                    <p className='font-black mt-2.5 text-lg'>Experience</p>
                </div>
                <div className={classes.sectionLeft}>
                    {/* Wefunder */}
                    <h5 className='mt-5 leading-3'><strong className='font-black'>Wefunder</strong> / Software Engineer</h5>
                    <small className='text-xs text-gray-500'>Aug 2021 - May 2023,  San Francisco</small>
                    <p>A Y-Combinator startup. Full Stack. React/TS and Ruby on Rails. Led development on the primary discovery
                        (Explore) page. Also responsible for our analytics pipelines and several internal sales/conversion tools
                        while coordinating with Sales Ops.</p>
                    {/* Terralanes */}
                    <h5 className='mt-6 leading-3'><strong className='font-black'>Terralanes</strong> / Co-Founder & Lead Developer</h5>
                    <small className='text-xs text-gray-500'>Feb 2020 - Aug 2021,  Nashville</small>
                    <p>A CRM for freight brokerages. Acquired Freight Management Systems in Aug 2021. Co-founded the company,
                        hired developers, managed the development team, led front-end engineering.</p>
                    {/* Vanderbilt */}
                    <h5 className='mt-6 leading-3'><strong className='font-black'>Vanderbilt University Medical Center</strong> / Co-Founder & Lead Developer</h5>
                    <small className='text-xs text-gray-500'>Aug 2018 - Dec 2019,  San Francisco</small>
                    <p>Statistical analysis on the research database. Leveraged Stata and Tableau to report meaningful insights to PI.</p>
                </div>
            </section>
            <section className={classes.section}>
                <div className='col-span-1 w-full mt-1'>
                    <div className='w-[20px] border-b-2 border-black'></div>
                    <p className='font-black mt-2.5 text-lg'>Education</p>
                </div>
                <div className={classes.sectionLeft}>
                    <h5 className='mt-5 leading-3'><strong className='font-black'>University of Tennessee</strong> / B.S. Biochemistry</h5>
                    <small className='text-xs text-gray-500'>Aug 2014 - May 2018,  Knoxville</small>
                    <p>Concentration in Biochemistry and Cellular & Molecular Biology. 3.5 GPA. In addition to an advanced education in
                        biology, chemistry, and physics, I had my first exposure to programming with R, MATLAB, and Excel.</p>
                </div>
            </section>
        </article >
    )
}

export default Resume