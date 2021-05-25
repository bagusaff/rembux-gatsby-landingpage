import React from "react"
import styled from "styled-components"

const ReviewBackground = () => {
  return (
    <Wrapper>
      <Background>
        <Image src="/images/icons/circle-3.svg" />
        <Image src="/images/icons/circle-4.svg" />
      </Background>
    </Wrapper>
  )
}

export default ReviewBackground

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 1440px;
  z-index: -2;
`

const Image = styled.img`
  position: absolute;
  z-index: -1;
  :nth-child(1) {
    right: 0px;
    top: 0px;
  }
  :nth-child(2) {
    bottom: 0px;
  }
`

const Background = styled.div`
  background-color: #fcf7f9;
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`
