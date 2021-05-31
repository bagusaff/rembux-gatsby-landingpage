import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { IoIosArrowDown, IoIosMenu } from "react-icons/io"
import { Link as LinkScroll } from "react-scroll"
import { Link } from "gatsby"

const Navbar = ({ toggle, home }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const scrolled = () => {
    if (window.scrollY >= 250) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrolled)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarWrapper>
          <LogoWrapper to="/">
            <Logo
              src={
                scrollNav
                  ? "/images/logos/rembux-dark.svg"
                  : "/images/logos/rembux.svg"
              }
              alt="rembux"
            />
          </LogoWrapper>
          <HamburgerMenu onClick={toggle}>
            <IoIosMenu size="2rem" color={scrollNav ? "#00163A" : "white"} />
          </HamburgerMenu>
          {home ? (
            <NavMenu>
              <NavItem
                scrollNav={scrollNav}
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                About Us
              </NavItem>
              <NavItem
                scrollNav={scrollNav}
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Service
              </NavItem>
              <NavItem
                scrollNav={scrollNav}
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Project
              </NavItem>
              <NavItem
                scrollNav={scrollNav}
                to="review"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Testimonial
              </NavItem>
              <NavItem
                scrollNav={scrollNav}
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Contact
              </NavItem>
            </NavMenu>
          ) : (
            <></>
          )}

          <ButtonWrapper>
            <Button scrollNav={scrollNav}>
              <Flag src="/images/icons/flag-ind.svg" />
              <p>ID</p>
              <IoIosArrowDown color={scrollNav ? " #00163A" : "black"} />
            </Button>
          </ButtonWrapper>
        </NavbarWrapper>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
  height: auto;
  margin-top: -70px;
  position: sticky;
  background: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? " 0px 4px 4px rgba(0, 0, 0, 0.15)" : "none"};
  top: 0;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 100;
`

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1234px;
  margin: auto;
  height: inherit;
  padding: 10px 20px;
`

const LogoWrapper = styled(Link)``

const Logo = styled.img`
  cursor: pointer;
`

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-left: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled(LinkScroll)`
  text-align: center;
  color: ${({ scrollNav }) => (scrollNav ? "#FC5C7E" : "white")};
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  height: 100%;
  position: relative;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: -10px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ scrollNav }) => (scrollNav ? "#FC5C7E" : "white")};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`

const ButtonWrapper = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`

const Button = styled.button`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "transparent")};
  border: 2px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  border-radius: 10px;
  padding: 6px 10px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  > p {
    font-weight: 700;
    color: ${({ scrollNav }) => (scrollNav ? "#313131" : "black")};
    font-family: "Nunito", sans-serif;
  }
`

const Flag = styled.img``
