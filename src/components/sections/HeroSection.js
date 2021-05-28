import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { BodyText, H1 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

import HeroBackground from "../backgrounds/HeroBackground"
const HeroSection = () => {
  return (
    <Wrapper id="home">
      <HeroBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Tugas mu butuh aplikasi, tapi kamu ngga sempet bikin sendiri?
          </Title>
          <Description>Atau</Description>
          <Title>Bikin aplikasi pakai jasa, tapi ragu sama biaya nya?</Title>
          <Description>
            Jika kehidupan mu sekarang sedang berkutat dengan pertanyaan diatas,
            Rembux adalah solusi tepat untuk membantu menyelesaikan masalahmu.
            Biaya? Tenang, kamu tentuin sendiri biaya nya.
          </Description>

          <ButtonLink to="/page-2">
            <TextLink>Yuk konsultasi dulu!</TextLink>
          </ButtonLink>
        </TextWrapper>
        <ImageWrapper>
          <Banner alt="hero" src="images/banners/hero-banner.svg" />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  overflow: clip;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 20px 50px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: 30px;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    padding: 75px 20px 25px;
  }
`

const TextWrapper = styled.div`
  max-width: 525px;
  display: grid;
  gap: 2rem;
  grid-auto-rows: min-content;
  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const ImageWrapper = styled.div`
  /* display: none; */
  @media (max-width: 600px) {
    display: none;
  }
`

const Banner = styled.img`
  max-width: 100%;
  height: auto;
`

const Title = styled(H1)`
  color: ${themes.text1};
  line-height: 2.5rem;
  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 2rem;
  }
`

const Description = styled(BodyText)`
  font-size: 1rem;
  line-height: 22px;
  color: ${themes.text1};
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const ButtonLink = styled(Link)`
  border-radius: 20px;
  background: white;
  white-space: nowrap;
  padding: 12px 30px;
  display: inline-block;
  outline: none;
  border: none;
  width: min-content;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const TextLink = styled.p`
  text-align: center;
  color: #fc5c7e;
  text-decoration: none;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`
