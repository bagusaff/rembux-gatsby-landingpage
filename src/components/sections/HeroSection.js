import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyText, H1 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import HeroBackground from "../backgrounds/HeroBackground"
const HeroSection = () => {
  return (
    <Wrapper>
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

          <ButtonWrapper>
            <Link to="/page-2">
              <ButtonLink>
                <TextLink>Yuk konsultasi dulu!</TextLink>
              </ButtonLink>
            </Link>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Banner src="/images/banners/hero-banner.svg" />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  /* overflow: hidden; */
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 0px 50px;
  display: grid;
  grid-template-columns: 2fr auto;
  column-gap: 30px;
`

const TextWrapper = styled.div`
  max-width: 525px;
  display: grid;
  gap: 2rem;
  grid-auto-rows: min-content;
`

const ImageWrapper = styled.div`
  /* display: none; */
`

const Banner = styled.img``

const Title = styled(H1)`
  color: ${themes.text1};
  line-height: 2.5rem;
`

const Description = styled(BodyText)`
  font-size: 1rem;
  line-height: 22px;
  color: ${themes.text1};
`

const ButtonWrapper = styled.div``

const ButtonLink = styled.div`
  border-radius: 20px;
  background: white;
  white-space: nowrap;
  padding: 12px 30px;
  display: inline-block;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const TextLink = styled.a`
  text-align: center;
  color: #fc5c7e;
  text-decoration: none;
  font-weight: 700;
`
