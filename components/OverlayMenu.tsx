import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

import Logo from './Logo'
import NavBar from './NavBar'

export interface OverlayMenuProps {
  onClick: () => void
}

const OverlayMenu = ({ onClick }: OverlayMenuProps) => {
  return (
    <div
      onClick={() => onClick()}
      className="bg-primary-white top-0 left-0 fixed w-full h-full z-50 flex flex-col opacity-95"
    >
      <div className="h-20 shadow-sm">
        <div className="container flex justify-between items-center h-full">
          <Logo />
          <div className="text-primary-red hover:text-primary-crimson cursor-pointer transition ease-in duration-200">
            <FontAwesomeIcon width={25} icon={faWindowClose} />
          </div>
        </div>
      </div>
      <div className="container flex flex-1 items-center  justify-center">
        <NavBar overlayStyle />
      </div>
    </div>
  )
}

export default OverlayMenu
