import React from "react"
import styled from "styled-components"

const HeroBackground = () => {
  return (
    <Wrapper>
      <Background src="/images/backgrounds/hero-background.svg" />
    </Wrapper>
  )
}

export default HeroBackground

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
  overflow-x: clip !important;
`

const Background = styled.img`
  position: absolute;
  z-index: -1;
  @media (max-width: 480px) {
    max-width: 600px;
    height: auto;
  }
`
