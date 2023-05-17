import React from 'react'
import gh from '../../../assets/images/github-inverted.svg'
import tw from '../../../assets/images/twitter-inverted.svg'
import li from '../../../assets/images/linkedin-inverted.svg'
import web from '../../../assets/icons/website.png'

const Resume = () => {
    const classes = {
        abbreviator: 'hidden sm:inline',
        details: 'text-[10px] sm:text-base',
        jobDesc: 'text-xs sm:text-sm mt-2 list-disc pl-4 sm:pl-6',
        jobTitle: 'mt-6 leading-4 text-sm sm:text-base',
        name: 'font-black text-xl sm:text-5xl sm:leading-[56px]',
        section: 'mt-10 grid grid-cols-3',
        sectionLeft: 'col-span-2 border-t-4 border-black sm:ml-6',
        socials: 'text-[10px] sm:text-xs col-span-5 text-blue-600 cursor-pointer',
        socialsImage: 'h-3 sm:h-4',
        title: 'mt-2 font-black text-xs sm:text-2xl text-red-600',
    }

    return (
        <article className='w-screen px-4 sm:px-40 font-lato'>
            <section className={classes.section}>
                <div className='col-span-1'>
                    <h1 className={classes.name}>Parker</h1>
                    <h1 className={classes.name}>Hodge</h1>
                    <h3 className={classes.title}>Software Developer</h3>
                </div>
                <div className='border-t-4 border-black col-span-2 mt-7 sm:ml-6 pt-4 grid grid-cols-2'>
                    <div>
                        <p className={classes.details}>1409 Stratton Ave</p>
                        <p className={classes.details}>Nashville, TN 37206</p>
                        <br />
                        <p className={classes.details}>615.497.3661</p>
                        <p className={classes.details}>iparkerhodge@gmail.com</p>
                    </div>
                    <div className='grid grid-cols-6 grid-rows-4 items-center'>
                        <img src={web} className={classes.socialsImage} />
                        <p className={classes.socials}><a href='https://www.parkerhodge.me'>parkerhodge.me</a></p>
                        <img src={li} className={classes.socialsImage} />
                        <p className={classes.socials}><span className={classes.abbreviator}><a href='https://www.linkedin.com/in/iparkerhodge'>linkedin.com</a></span>/in/iparkerhodge</p>
                        <img src={tw} className={classes.socialsImage} />
                        <p className={classes.socials}>
                            <a href='https://twitter.com/parkerhodgedev'>
                                <span className={classes.abbreviator}>twitter.com/</span>
                                <span className='inline sm:hidden'>@</span>parkerhodgedev
                            </a>
                        </p>
                        <img src={gh} className={classes.socialsImage} />
                        <p className={classes.socials}>
                            <a href='https://github.com/iparkerhodge'>
                                <span className={classes.abbreviator}>github.com</span>/iparkerhodge
                            </a>
                        </p>
                    </div>
                </div>
            </section >
            <section className={classes.section}>
                <div className='col-span-1 w-full mt-1'>
                    <div className='w-[20px] border-b-2 border-black'></div>
                    <p className='font-black mt-2.5 text-lg'>Summary</p>
                </div>
                <div className={classes.sectionLeft}>
                    <p className='pt-4 text-xs sm:text-base'>👋Hi, I’m Parker Hodge. I am a startup founder and a full-stack developer with 4 years of experience in developing web applications.</p>
                    <div className='grid grid-cols-3 text-[10px] sm:text-base pl-4 sm:pl-6 pt-2'>
                        <ul className='list-disc'>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Ruby</li>
                            <li>C#</li>
                            <li>SQL</li>
                        </ul>
                        <ul className='list-disc'>
                            <li>React</li>
                            <li>Rails</li>
                            <li>.NET</li>
                            <li>Tailwind CSS</li>
                            <li>Node JS</li>
                        </ul>
                        <ul className='list-disc'>
                            <li>AWS</li>
                            <li>Google Cloud</li>
                            <li>Docker</li>
                            <li>Elasticsearch</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={classes.section}>
                <div className='col-span-1 w-full mt-1'>
                    <div className='w-[20px] border-b-2 border-black'></div>
                    <p className='font-black mt-2.5 text-lg'>Experience</p>
                </div>
                <div className={classes.sectionLeft}>
                    {/* Wefunder */}
                    <h5 className={classes.jobTitle}><strong className='font-black'>Wefunder</strong> / Software Engineer</h5>
                    <small className='text-xs text-gray-500'>Aug 2021 - May 2023,  San Francisco</small>
                    <ul className={classes.jobDesc}>
                        <li>Built and strengthened real-time analytics dashboard for CEO monitoring of KPIs.</li>
                        <li>Integrated a new CRM to manage sales conversion through pipeline.</li>
                        <li>Coordinated with Sales Ops to build inbound sales screening tools.</li>
                        <li>Re-built and optimized main discovery page to new design specs (<a href='https://wefunder.com/explore' className='text-blue-600 cursor-pointer'>wefunder.com/explore</a>).</li>
                    </ul>
                    {/* Terralanes */}
                    <h5 className={classes.jobTitle}><strong className='font-black'>Terralanes</strong> / Co-Founder & Lead Developer</h5>
                    <small className='text-xs text-gray-500'>Feb 2020 - Aug 2021,  Nashville</small>
                    <ul className={classes.jobDesc}>
                        <li>Technical founder of a new CRM designed for freight brokerages.</li>
                        <li>Hired, managed and directed a development team of 4 engineers.</li>
                        <li>Conceptualized, designed and built all front-end pages and components for our web app.</li>
                        <li>CFacilitated the transfer of operations and merger with the acquiring development team.</li>
                    </ul>
                    {/* Vanderbilt */}
                    <h5 className={classes.jobTitle}><strong className='font-black'>Vanderbilt University Medical Center</strong> / Research Assistant</h5>
                    <small className='text-xs text-gray-500'>Aug 2018 - Dec 2019,  San Francisco</small>
                    <ul className={classes.jobDesc}>
                        <li>Statistical analysis and reporting to PI</li>
                    </ul>
                </div>
            </section>
            <section className={classes.section}>
                <div className='col-span-1 w-full mt-1'>
                    <div className='w-[20px] border-b-2 border-black'></div>
                    <p className='font-black mt-2.5 text-lg'>Education</p>
                </div>
                <div className={classes.sectionLeft}>
                    <h5 className={classes.jobTitle}><strong className='font-black'>University of Tennessee</strong> / B.S. Biochemistry</h5>
                    <small className='text-xs text-gray-500'>Aug 2014 - May 2018,  Knoxville</small>
                    <p className={classes.jobDesc}>Concentration in Biochemistry and Cellular & Molecular Biology. 3.5 GPA. In addition to an advanced education in
                        biology, chemistry, and physics, I had my first exposure to programming with R, MATLAB, and Excel.</p>

                    <h5 className={classes.jobTitle}><strong className='font-black'>Nashville Software School</strong> / React & .NET Cohort</h5>
                    <small className='text-xs text-gray-500'>Dec 2019 - June 2020,  Knoxville</small>
                </div>
            </section>
        </article >
    )
}

export default Resume