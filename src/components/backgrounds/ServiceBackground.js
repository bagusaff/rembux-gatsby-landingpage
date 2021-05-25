import React from "react"
import styled from "styled-components"
const ServiceBackground = () => {
  return (
    <Wrapper>
      <Background src="/images/icons/circle-1.svg" />
      <Background src="/images/icons/circle-2.svg" />
      <Background src="/images/icons/circle-1.svg" />
    </Wrapper>
  )
}

export default ServiceBackground

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
`

const Background = styled.img`
  position: absolute;
  z-index: -1;
  :nth-child(1) {
    right: 0%;
    top: 250px;
  }
  :nth-child(2) {
    left: 0%;
    top: 650px;
  }
  :nth-child(3) {
    right: 0%;
    top: 950px;
  }
`
