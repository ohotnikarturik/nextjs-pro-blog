import { useRouter } from 'next/router'

import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  const router = useRouter()

  return (
    <header className="h-16">
      <div className="container flex justify-between items-center h-full">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
