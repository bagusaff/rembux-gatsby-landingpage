import React from "react"
import styled from "styled-components"

import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ProjectCard from "../cards/ProjectCard"
const ProjectSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Karya Kami</Title>
        <ProjectWrapper>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectWrapper>
        <ButtonWrapper>
          <ButtonMore>Lihat Selengkapnya!</ButtonMore>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProjectSection

const Wrapper = styled.div``

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 40.5%;
  top: 12.5%;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 20px 50px;
  display: grid;
  align-items: center;
  row-gap: 5rem;
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};
`

const ProjectWrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`

const ButtonWrapper = styled.div`
  width: inherit;
  margin: auto;
`

const ButtonMore = styled.a`
  align-self: center;
  letter-spacing: 2px;
  display: inline-block;
  cursor: pointer;
  color: #fc5c7e;
  text-align: center;
  font-weight: bold;
  padding: 1rem 3rem;
  border: 3px solid #fc5c7e;
  border-radius: 2rem;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #fc5c7e;
    color: white;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }
`
