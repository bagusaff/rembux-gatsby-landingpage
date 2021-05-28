import React, { useState } from "react"
import "./layout.css"
import { GlobalStyles } from "../styles/GlobalStyles"
import Navbar from "../../components/sections/Navbar"
import Sidebar from "../sections/Sidebar"
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout
