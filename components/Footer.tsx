import Logo from './Logo'
import NavBar from './NavBar'
import SocialItems from './SocialItems'

const Footer = () => {
  return (
    <footer className="bg-primary-black ">
      <div className="container h-48">
        <div className="h-3/4 border-b border-gray-700 flex items-center">
          <div className="w-1/3 flex items-center justify-start">
            <SocialItems footerStyle />
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <NavBar footerStyle />
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <Logo footerStyle />
          </div>
        </div>
        <div className="h-1/4 text-primary-white flex justify-center items-center">
          <p>Copyright © 2021 Artur Okhotnichenko</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
