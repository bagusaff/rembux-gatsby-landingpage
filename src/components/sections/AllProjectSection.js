import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ProjectCard from "../cards/ProjectCard"
import { publicAxios } from "../../services/axios.service"

const AllProjectSection = () => {
  const [project, setProject] = useState([])

  useEffect(() => {
    let isMounted = false
    const FetchAllProject = () => {
      publicAxios
        .get("/api/project/")
        .then(res => {
          setProject(res.data)
        })
        .catch(err => console.log(err))
    }
    FetchAllProject()
    return () => {
      isMounted = true
    }
  }, [])

  return (
    <Wrapper>
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Karya Kami</Title>
        <FilterWrapper>
          <FilterButton>Semua Project</FilterButton>
          <FilterButton>Web Apps</FilterButton>
          <FilterButton>Mobile Apps</FilterButton>
          <FilterButton>Landing Page</FilterButton>
        </FilterWrapper>
        <ProjectWrapper>
          {project.map(item => (
            <ProjectCard key={item._id} item={item} />
          ))}
        </ProjectWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AllProjectSection

const Wrapper = styled.div``

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 40.5%;
  top: 2.5%;
  @media (max-width: 480px) {
    left: 30%;
    top: 0.7%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 50px 20px 50px;
  display: grid;
  align-items: center;
  row-gap: 5rem;
  @media (max-width: 480px) {
    padding: 50px 20px;
    row-gap: 2rem;
  }
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const FilterWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  column-gap: 1rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, auto);
    row-gap: 1rem;
  }
`

const FilterButton = styled.button`
  align-self: center;
  letter-spacing: 2px;
  display: inline-block;
  cursor: pointer;
  color: #fc5c7e;
  background-color: white;
  text-align: center;
  font-weight: 400;
  width: 200px;
  padding: 0.75rem 2.5rem;
  border: 1px solid #fc5c7e;
  border-radius: 2rem;
  position: relative;
  &:hover {
    background: #fc5c7e;
    color: white;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }
  :active {
    background: #fc5c7e;
    color: white;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 150px;
    padding: 0.75rem 0rem;
  }
`

const ProjectWrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`
