import React from "react"
import styled from "styled-components"

const ProjectHeroBackground = () => {
  return (
    <Wrapper>
      <Background />
      <WaveWrapper>
        <Waves src="/images/waves/project-hero-wave1.svg" />
        <Waves src="/images/waves/project-hero-wave2.svg" />
      </WaveWrapper>
    </Wrapper>
  )
}

export default ProjectHeroBackground

const Wrapper = styled.div`
  position: relative;
`

const Waves = styled.img`
  position: absolute;
  z-index: -1;

  :nth-child(1) {
    top: 550px;
  }
  :nth-child(2) {
    top: 650px;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    :nth-child(1) {
      top: 400px;
    }
    :nth-child(2) {
      top: 450px;
    }
  }
`

const Background = styled.img`
  position: absolute;
  height: 800px;
  width: 100%;
  background: linear-gradient(200.44deg, #fc5c7e 13.57%, #fe7e68 98.38%);
  z-index: -1;
`

const WaveWrapper = styled.div``
