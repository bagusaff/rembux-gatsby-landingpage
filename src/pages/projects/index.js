import React from "react"

import Layout from "../../components/layout/layout"
import ContactSection from "../../components/sections/ContactSection"
import ProjectHero from "../../components/sections/ProjectHero"
import ProjectSection from "../../components/sections/ProjectSection"

const ProjectPage = () => {
  return (
    <Layout>
      <ProjectHero />
      <ProjectSection />
      <ContactSection />
    </Layout>
  )
}

export default ProjectPage
