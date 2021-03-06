import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import AboutSection from "../components/sections/AboutSection"
import AdvantageSection from "../components/sections/AdvantageSection"
import ContactSection from "../components/sections/ContactSection"
import HeroSection from "../components/sections/HeroSection"

import ProjectSection from "../components/sections/ProjectSection"
import ReviewSection from "../components/sections/ReviewSection"
import ServiceSection from "../components/sections/ServiceSection"

function IndexPage() {
  return (
    <Layout home>
      <Seo title="Home" />
      <HeroSection />
      <AboutSection />
      <AdvantageSection />
      <ServiceSection />
      <ProjectSection />
      <ReviewSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
