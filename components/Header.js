import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header
