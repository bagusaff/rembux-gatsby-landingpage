import React from "react"
import styled from "styled-components"

const HeroBackground = () => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <Background src="/images/backgrounds/hero-background.svg" />
      </BackgroundWrapper>
    </Wrapper>
  )
}

export default HeroBackground

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
  /* overflow-x: clip !important; */
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 100vw;
  z-index: -1;
`
const Background = styled.img`
  /* position: absolute;
  z-index: -1; */
  @media (max-width: 480px) {
    max-width: 600px;
    height: auto;
  }
`
