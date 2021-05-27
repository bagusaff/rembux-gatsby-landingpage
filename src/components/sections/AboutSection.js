import React from "react"
import styled from "styled-components"
import { BodyText, H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
const AboutSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Tentang Kami</Title>
        <Description>
          Kami menyadari bahwa semakin hari, perkembangan teknologi semakin
          cepat dan semakin masuk ke dalam semua lini kehidupan. Sehingga,
          membuat orang-orang berinvoasi membuat teknologi untuk mempermudah
          aktifitas sehari-hari. Dan tentunya, tidak semua orang memahami dan
          mempunyai ilmu dan pengetahuan tentang teknologi.
        </Description>
        <Description>
          Menyadari hal tersebut, Rembux hadir untuk bersinergi dan berkembang
          bersama untuk menyelesaikan permasalahan mu. Tidak memiliki keahlian
          untuk mengembangkan aplikasi bukan halangan untuk mu mewujudkan
          impianmu. Kita bersama membangun masa depan yang lebih cerah!
        </Description>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AboutSection

const Wrapper = styled.div``

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 39%;
  top: 30%;
  @media (max-width: 480px) {
    left: 27%;
    top: 14%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 20px 50px;
  display: grid;
  row-gap: 2rem;

  @media (max-width: 480px) {
    padding: 100px 20px 50px;
    row-gap: 1.25rem;
  }
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const Description = styled(BodyText)`
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.5rem;
  color: ${themes.text2};
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5rem;
  }
`
