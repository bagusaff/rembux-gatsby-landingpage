import React from "react"
import styled from "styled-components"

import { BodyText, H2, H3 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ServiceBackground from "../backgrounds/ServiceBackground"
const ServiceSection = () => {
  return (
    <>
      <Wrapper>
        <ServiceBackground />
        <ContentWrapper>
          <PreTitle src="/images/backgrounds/pre-title.svg" />
          <Title>Layanan Kami</Title>

          {/* Service 1 */}
          <InnerWrapper>
            <ImageWrapper>
              <Image src="/images/banners/service-1.svg" />
            </ImageWrapper>
            <DescriptionWrapper>
              <Header>
                <Image src="/images/icons/line.svg" />
                <ServiceTitle>Web Apps</ServiceTitle>
              </Header>
              <ServiceBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ServiceBody>
              <ServiceBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ServiceBody>
            </DescriptionWrapper>
          </InnerWrapper>

          {/* Service 2 */}
          <InnerWrapper>
            <DescriptionWrapper>
              <Header>
                <Image src="/images/icons/line.svg" />
                <ServiceTitle>Mobile Apps</ServiceTitle>
              </Header>
              <ServiceBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ServiceBody>
              <ServiceBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ServiceBody>
            </DescriptionWrapper>
            <ImageWrapper>
              <Image src="/images/banners/service-2.svg" />
            </ImageWrapper>
          </InnerWrapper>

          {/* Service 3 */}
          <InnerWrapper>
            <ImageWrapper>
              <Image src="/images/banners/service-3.svg" />
            </ImageWrapper>
            <DescriptionWrapper>
              <Header>
                <Image src="/images/icons/line.svg" />
                <ServiceTitle>Landing Page</ServiceTitle>
              </Header>
              <ServiceBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ServiceBody>
              <ServiceBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ServiceBody>
            </DescriptionWrapper>
          </InnerWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default ServiceSection

const Wrapper = styled.div``

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 39%;
  top: 10%;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 20px 50px;
  display: grid;
  row-gap: 5rem;
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
`

const ImageWrapper = styled.div`
  flex: 5;
`

const Image = styled.img``

const DescriptionWrapper = styled.div`
  flex: 7;
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 1rem;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
`

const ServiceTitle = styled(H3)`
  font-weight: 800;
  font-size: 1.125rem;
  color: #061d40;
  background-color: white;
  padding: 1rem;
  margin-left: -5px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    margin-left: 15px;
  }
`

const ServiceBody = styled(BodyText)`
  color: #9f9f9f;
  font-size: 1rem;
  line-height: 22px;
  width: 600px;
`
