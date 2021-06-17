import React from "react"
import styled from "styled-components"
import { FiExternalLink } from "react-icons/fi"

const ProjectCard = ({ item, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={item.thumbnail} />
      <LinkWrapper>
        <Link>{item.title}</Link>
        <FiExternalLink size="1.5rem" color="#FC5C7E" />
      </LinkWrapper>
    </Wrapper>
  )
}

export default ProjectCard

const Wrapper = styled.div`
  max-width: 332px;
  max-height: 331px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 5px 21px -8px rgba(0, 0, 0, 0.25);
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s, transform 0.3s, opacity 0.3s,
    background-color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #fc5c7e;
  padding: 1rem;
  align-items: center;
`

const Link = styled.h3`
  font-weight: 400;
  color: #061d40;
  padding: 0;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const Image = styled.img`
  @media (min-width: 768px) {
    width: 280px;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 250px;
    max-height: 250px;
    width: 100%;
  }
`
