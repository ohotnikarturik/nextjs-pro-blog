import Logo from './Logo'
import NavBar from './NavBar'
import SocialItems from './SocialItems'

const Footer = () => {
  return (
    <footer className="bg-primary-black ">
      <div className="container h-80">
        <div className="h-3/4 border-b border-gray-700 flex justify-between items-end pb-10">
          <SocialItems footerStyle />
          <NavBar footerStyle />
          <Logo footerStyle />
        </div>
        <div className="h-1/4 text-primary-white flex justify-center items-center">
          <p>Copyright © 2021 Artur Okhotnichenko</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
