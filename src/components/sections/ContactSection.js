import React from "react"
import styled from "styled-components"

import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ContactBackground from "../backgrounds/ContactBackground"
import ContactForm from "../forms/ContactForm"

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa"

const ContactSection = () => {
  return (
    <Wrapper>
      <ContactBackground />
      <ContentWrapper>
        <PreTitle src="/images/backgrounds/pre-title.svg" />
        <Title>Hubungi Kami!</Title>
        <ContactForm />
        <IconWrapper>
          <Icon
            href="https://facebook.com/amrullah.abughazalleh"
            target="_blank"
          >
            <FaFacebookF />
          </Icon>
          <Icon href="https://twitter.com/bagusaff" target="_blank">
            <FaTwitter />
          </Icon>
          <Icon href="https://instagram.com/rembux.dev" target="_blank">
            <FaInstagram />
          </Icon>
          <Icon>
            <FaGooglePlusG />
          </Icon>
        </IconWrapper>
        <Footer>2021 © rembux.dev - All Right Reserved.</Footer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ContactSection

const Wrapper = styled.div``

const PreTitle = styled.img`
  position: absolute;
  z-index: -1;
  left: 38.5%;
  top: 3%;

  @media (max-width: 480px) {
    left: 25%;
    top: 3%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 50px 20px 0;
  display: grid;
  align-items: center;
  justify-content: center;
  row-gap: 4rem;
  @media (max-width: 480px) {
    row-gap: 2rem;
  }
`

const Title = styled(H2)`
  text-align: center;
  color: ${themes.secondary};
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 1rem;

  align-items: center;
  justify-content: center;
`

const Icon = styled.a`
  background-color: white;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: scale(1.1);
    background-color: #fc5c7e;
    > * {
      transform: scale(1.1);
      fill: white;
    }
  }
  > * {
    fill: #fc5c7e;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const Footer = styled.footer`
  font-weight: normal;
  margin: auto;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`
