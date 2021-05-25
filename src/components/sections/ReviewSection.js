import React from "react"
import styled from "styled-components"

import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ReviewBackground from "../backgrounds/ReviewBackground"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core"
import ReviewCard from "../cards/ReviewCard"

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const ReviewSection = () => {
  return (
    <Wrapper>
      <ReviewBackground />
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Apa Kata Mereka ?</Title>
        <ReviewWrapper>
          <Quote src="/images/icons/quote.svg" />
          <SwiperContainer
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            className="mySwiper"
          >
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
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
`

const ReviewWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 900px;
  height: 500px;
  background: #fffafc;
  box-shadow: 7px 4px 20px -6px rgba(0, 0, 0, 0.25);
  padding: 5rem;
`

const Quote = styled.img`
  position: absolute;
`

const SwiperContainer = styled(Swiper)`
  width: 600px;
  height: 400px;

  .swiper-pagination-bullet {
    width: 35px;
    height: 10px;
    background: transparent;
    border: 1px solid #fc5c7e;
    box-sizing: border-box;
    border-radius: 15px;
  }

  .swiper-pagination-bullet-active {
    width: 35px;
    height: 10px;
    background: #fc5c7e;
    border-radius: 15px;
  }
`
