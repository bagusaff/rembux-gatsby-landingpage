import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ReviewBackground from "../backgrounds/ReviewBackground"
import ReviewCard from "../cards/ReviewCard"

const ReviewSection = () => {
  return (
    <Wrapper id="review">
      <ReviewBackground />
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Apa Kata Mereka ?</Title>
        <ReviewWrapper>
          <Quote src="/images/icons/quote.svg" />
          <SwiperContainer
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </SwiperContainer>
        </ReviewWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ReviewSection

const Wrapper = styled.div`
  height: 800px;
`

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 36%;
  top: 10%;
  @media (max-width: 480px) {
    left: 18%;
    top: 10%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 20px 50px;
  display: grid;
  row-gap: 5rem;
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const ReviewWrapper = styled.div`
  margin: auto;
  position: relative;
  max-height: 500px;
  background: #fffafc;
  box-shadow: 7px 4px 20px -6px rgba(0, 0, 0, 0.25);
  padding: 5rem;
  @media (max-width: 768px) {
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }
`

const Quote = styled.img`
  position: absolute;
`

const SwiperContainer = styled(Carousel)`
  margin: auto;
  .dot {
    width: 35px !important;
    height: 10px !important;
    background: transparent !important;
    border: 1px solid #fc5c7e !important;
    box-sizing: border-box;
    border-radius: 15px !important;
    box-shadow: none !important;
  }
  .control-dots {
    margin: 0 !important;
    > .dot.selected {
      background-color: #fc5c7e !important;
    }
  }

  @media (max-width: 480px) {
    max-width: 350px;
    .dot {
      width: 25px !important;
      height: 7px !important;
      border: 1px solid #fc5c7e !important;
    }
  }
`
