import React from "react"
import styled from "styled-components"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ProjectHeroCard from "../cards/ProjectHeroCard"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import ProjectHeroBackground from "../backgrounds/ProjectHeroBackground"

const ProjectHero = () => {
  return (
    <Wrapper>
      <ProjectHeroBackground />
      <ContentWrapper>
        <SwiperWrapper
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ArrowButton
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  left: 20,
                }}
              >
                <IoIosArrowBack fill="white" />
              </ArrowButton>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ArrowButton
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  right: 20,
                }}
              >
                <IoIosArrowForward fill="white" />
              </ArrowButton>
            )
          }
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          swipeable={true}
          emulateTouch={true}
        >
          <ProjectHeroCard />
          <ProjectHeroCard />
          <ProjectHeroCard />
        </SwiperWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProjectHero

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: auto;
  padding: 8rem 1.25rem;
`

const SwiperWrapper = styled(Carousel)`
  .dot {
    width: 35px !important;
    height: 10px !important;
    background: transparent !important;
    border: 1px solid #ffffff !important;
    box-sizing: border-box;
    border-radius: 15px !important;
    box-shadow: none !important;
  }
  .control-dots {
    margin: 0 !important;
    > .dot.selected {
      background-color: #ffffff !important;
    }
  }
`

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 50%;
  top: calc(50% - 15px);
  z-index: 2;
  position: absolute;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 480px) {
    display: none;
  }
`
