import React from "react"
import styled from "styled-components"

const HeroBackground = () => {
  return (
    <Wrapper>
      <BackgroundContainer>
        <Background src="/images/backgrounds/hero-background.svg" />
      </BackgroundContainer>
    </Wrapper>
  )
}

export default HeroBackground

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
  overflow-x: clip;
`

const Background = styled.img`
  position: absolute;
  z-index: -1;
  @media (max-width: 480px) {
    max-width: 600px;
    height: auto;
    background-size: cover;
  }
`

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`
