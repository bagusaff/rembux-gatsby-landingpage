import React from "react"
import styled from "styled-components"

const ContactBackground = () => {
  return (
    <Wrapper>
      <Background>
        <Particle src="/images/backgrounds/contact-circle-left.svg" />
        <Particle src="/images/backgrounds/contact-circle-right.svg" />
        <BackgroundImage src="/images/backgrounds/contact-background.svg" />
      </Background>
    </Wrapper>
  )
}

export default ContactBackground

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
`

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
`

const Particle = styled.img`
  position: absolute;
  z-index: -1;
  padding: 1rem;
  :nth-child(1) {
    top: 0;
    left: 0;
  }
  :nth-child(2) {
    top: 0;
    right: 0;
  }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`
