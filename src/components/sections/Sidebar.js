import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link as LinkScroll } from "react-scroll"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggle, home }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <LogoWrapper to="/">
            <LinkText>
              <Logo src="/images/logos/rembux.svg" />
            </LinkText>
          </LogoWrapper>
          {home ? (
            <>
              <SidebarLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                onClick={toggle}
              >
                <LinkText>About Us</LinkText>
              </SidebarLink>
              <SidebarLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggle}
              >
                <LinkText>Services</LinkText>
              </SidebarLink>
              <SidebarLink
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggle}
              >
                <LinkText>Project</LinkText>
              </SidebarLink>
              <SidebarLink
                to="review"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggle}
              >
                <LinkText>Testimonial</LinkText>
              </SidebarLink>
              <SidebarLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggle}
              >
                <LinkText>Contact</LinkText>
              </SidebarLink>
            </>
          ) : (
            <></>
          )}
        </SidebarMenu>
        {/* <SideBtnWrap>
            <SidebarBtn href="/login">Masuk</SidebarBtn>
          </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: linear-gradient(200.44deg, #fc5c7e 13.57%, #fe7e68 98.38%);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const SidebarWrapper = styled.div`
  color: #fff;
`

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 760px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img``

const LogoWrapper = styled(Link)``

const LinkText = styled.p`
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  position: relative;
  padding: 0.875rem;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`
