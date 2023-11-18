import React from 'react'
import GlobalHero from './HeroSections/GlobalHero'
import AboutPageSection from './AboutPage/AboutPageSection'
import AboutPageCards from './AboutPage/AboutPageCards'
import AboutVideo from './AboutPage/AboutVideo'

const About = () => {
  return (
    <>
        <GlobalHero headingText='About'/>
        <AboutPageSection/>
        <AboutPageCards/>
        <AboutVideo/>
    </>
  )
}

export default About