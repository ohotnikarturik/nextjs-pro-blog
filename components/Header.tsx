import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import NavBar from './NavBar'
import OverlayMenu from './OverlayMenu'

const Header = () => {
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false)

  const onClickOverlayMenu = () => {
    setIsOverlayMenuOpen(!isOverlayMenuOpen)
  }

  return (
    <header id="/header" className="h-20 shadow-sm">
      <div className="container flex justify-between items-center h-full">
        <Logo />
        <div>
          <div className="hidden md:block">
            <NavBar />
          </div>
          <div className="block md:hidden">
            {isOverlayMenuOpen ? (
              <OverlayMenu onClick={onClickOverlayMenu} />
            ) : (
              <HamburgerMenu onClick={onClickOverlayMenu} />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
