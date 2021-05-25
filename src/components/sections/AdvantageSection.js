import React from "react"
import styled from "styled-components"
import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
const AdvantageSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Kenapa Harus Kami</Title>
        <CardWrapper>
          <Card>
            <CardIcon src="/images/icons/icon-1.svg" />
            <CardTitle>Biaya Tentukan Sendiri</CardTitle>
          </Card>
          <Card>
            <CardIcon src="/images/icons/icon-2.svg" />
            <CardTitle>Konsultasi Gratis</CardTitle>
          </Card>
          <Card>
            <CardIcon src="/images/icons/icon-3.svg" />
            <CardTitle>Pelayanan Terbaik</CardTitle>
          </Card>
          <Card>
            <CardIcon src="/images/icons/icon-4.svg" />
            <CardTitle>Teknologi Terbaru</CardTitle>
          </Card>
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AdvantageSection

const Wrapper = styled.div``

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 35.5%;
  top: 22%;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 20px 50px;
  display: grid;
  row-gap: 5rem;
  position: relative;
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 2rem;
  justify-content: center;
`

const Card = styled.div`
  width: 220px;
  height: 255px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;
  color: rgba(0, 22, 58, 1);
  border-radius: 20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    scale: 1.05;
    color: white;
    box-shadow: 6px 6px 16px 5px rgba(0, 0, 0, 0.15);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    :nth-child(1) {
      background: linear-gradient(180deg, #dc5f93 0%, #9356d0 100%);
    }
    :nth-child(2) {
      background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
    }
    :nth-child(3) {
      background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
    }
    :nth-child(4) {
      background: linear-gradient(360deg, #2fb8ff 0%, #9eecd9 100%);
    }
  }
`

const CardIcon = styled.img`
  max-width: 90px;
  max-height: 90px;
  margin: 1rem;
`

const CardTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 1.125rem;
`
