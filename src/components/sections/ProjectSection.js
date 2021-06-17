import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ProjectCard from "../cards/ProjectCard"
import ProjectModal from "../cards/ProjectModal"
import { publicAxios } from "../../services/axios.service"

const ProjectSection = () => {
  const [project, setProject] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedData, setSelectedData] = useState({})

  const onCloseModal = () => {
    setOpenModal(false)
  }

  const onSelectData = selectedRec => {
    setSelectedData(selectedRec)
    setOpenModal(true)
  }

  useEffect(() => {
    let isMounted = false
    const FetchEightProject = () => {
      publicAxios
        .get("/api/project/display")
        .then(res => {
          setProject(res.data)
        })
        .catch(err => console.log(err))
    }
    FetchEightProject()
    return () => {
      isMounted = true
    }
  }, [])

  return (
    <Wrapper id="project">
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Karya Kami</Title>
        <ProjectWrapper>
          <ProjectModal
            isOpen={openModal}
            setOnClose={onCloseModal}
            data={selectedData}
          />
          {project.map(item => (
            <ProjectCard
              key={item._id}
              item={item}
              onClick={() => onSelectData(item)}
            />
          ))}
        </ProjectWrapper>
        <ButtonWrapper>
          <ButtonMore to="/projects">Lihat Selengkapnya!</ButtonMore>
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
  @media (max-width: 480px) {
    left: 25%;
    top: 0.7%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 20px 50px;
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

const ButtonWrapper = styled.div`
  width: inherit;
  margin: auto;
`

const ButtonMore = styled(Link)`
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

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0.75rem 1.5rem;
  }
`
