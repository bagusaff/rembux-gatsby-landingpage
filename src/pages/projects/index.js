import React from "react"

import Layout from "../../components/layout/layout"
import AllProjectSection from "../../components/sections/AllProjectSection"
import ContactSection from "../../components/sections/ContactSection"
import ProjectHero from "../../components/sections/ProjectHero"

const ProjectPage = () => {
  return (
    <Layout project>
      <ProjectHero />
      <AllProjectSection />
      <ContactSection />
    </Layout>
  )
}

export default ProjectPage
