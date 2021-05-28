import React from "react"
import styled from "styled-components"

const ProjectHeroCard = () => {
  return (
    <Wrapper>
      <ImageHeader src="/images/banners/service-1.svg" />
      <Title>Bangun Sebuah Website Untuk Bisnis Anda</Title>
      <Description>
        Membangun website profesional sesuai dengan budget anda
      </Description>
    </Wrapper>
  )
}

export default ProjectHeroCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding-bottom: 25px;
  margin: auto;

  @media (max-width: 480px) {
    padding-bottom: 2rem;
  }
`

const ImageHeader = styled.img`
  max-width: 350px;
  height: auto;
  margin: auto;
  @media (max-width: 480px) {
    max-width: 150px;
  }
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 60px;
  line-height: 82px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  @media (max-width: 480px) {
    font-size: 2.25rem;
    line-height: 3rem;
  }
`

const Description = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  mix-blend-mode: normal;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
