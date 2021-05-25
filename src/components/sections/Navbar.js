import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io"

const Navbar = () => {
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
          <LogoWrapper>
            <Logo
              src={
                scrollNav
                  ? "/images/logos/rembux-dark.svg"
                  : "/images/logos/rembux.svg"
              }
              alt="rembux"
            />
          </LogoWrapper>
          <NavMenu>
            <NavItem scrollNav={scrollNav}>About Us</NavItem>
            <NavItem scrollNav={scrollNav}>Service</NavItem>
            <NavItem scrollNav={scrollNav}>Project</NavItem>
            <NavItem scrollNav={scrollNav}>Testimonial</NavItem>
            <NavItem scrollNav={scrollNav}>Contact</NavItem>
          </NavMenu>
          <ButtonWrapper>
            <Button>
              <Flag src="/images/icons/flag-ind.svg" />
              <p>ID</p>
              <IoIosArrowDown />
            </Button>
          </ButtonWrapper>
        </NavbarWrapper>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
  height: 60px;
  margin-top: -60px;
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
  max-width: 1234px;
  margin: auto;
  height: inherit;
`

const LogoWrapper = styled.div``

const Logo = styled.img`
  cursor: pointer;
`

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-left: 100px;
`

const NavItem = styled.a`
  text-align: center;
  color: ${({ scrollNav }) => (scrollNav ? "#FC5C7E" : "white")};
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  height: 100%;
`

const ButtonWrapper = styled.div`
  margin-left: auto;
`

const Button = styled.button`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  border-radius: 10px;
  padding: 6px 10px;

  > p {
    font-weight: 700;
    color: #313131;
    font-family: "Nunito", sans-serif;
  }
`

const Flag = styled.img``
