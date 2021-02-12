import { useRouter } from 'next/router'
import HamburgerMenu from './HamburgerMenu'

import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  const router = useRouter()

  return (
    <header className="h-20 shadow-sm">
      <div className="container flex justify-between items-center h-full">
        <Logo />
        <div>
          <div className="hidden md:block">
            <NavBar />
          </div>
          <div className="block md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
