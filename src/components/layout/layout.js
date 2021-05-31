import React, { useState } from "react"
import "./layout.css"
import { GlobalStyles } from "../styles/GlobalStyles"
import Navbar from "../../components/sections/Navbar"
import Sidebar from "../sections/Sidebar"
function Layout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {home ? <Navbar home toggle={toggle} /> : <Navbar toggle={toggle} />}
      {home ? (
        <Sidebar home isOpen={isOpen} toggle={toggle} />
      ) : (
        <Sidebar isOpen={isOpen} toggle={toggle} />
      )}
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout
