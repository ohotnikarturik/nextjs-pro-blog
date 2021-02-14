import { Link as LinkScroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonScrollUp = () => {
  return (
    <LinkScroll
      className="inline-block relative transform cursor-pointer hover:scale-105 motion-reduce:transform-none focus:outline-none w-10 h-10 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md shadow-md font-medium"
      to="/header"
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
    >
      <div className="transform rotate-180 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <FontAwesomeIcon width={20} icon={'chevron-down'} />
      </div>
    </LinkScroll>
  )
}

export default ButtonScrollUp
