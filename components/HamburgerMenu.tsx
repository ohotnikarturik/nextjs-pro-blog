import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerMenu = () => {
  return (
    <div className="text-primary-red cursor-pointer hover:text-primary-crimson transition ease-in duration-200">
      <FontAwesomeIcon width={25} icon={faBars} />
    </div>
  )
}

export default HamburgerMenu
