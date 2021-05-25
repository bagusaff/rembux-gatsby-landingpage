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
`

const Background = styled.img`
  position: absolute;
  z-index: -1;
`
