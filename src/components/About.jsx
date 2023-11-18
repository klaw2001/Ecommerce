import React from 'react'
import GlobalHero from './HeroSections/GlobalHero'
import AboutPageSection from './AboutPage/AboutPageSection'
import AboutPageCards from './AboutPage/AboutPageCards'

const About = () => {
  return (
    <>
        <GlobalHero headingText='About'/>
        <AboutPageSection/>
        <AboutPageCards/>
    </>
  )
}

export default About