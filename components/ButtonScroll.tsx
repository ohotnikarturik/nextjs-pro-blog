import { Link as LinkScroll } from 'react-scroll'

import { ButtonToScrollProps } from '../interfaces'

const ButtonToScroll = ({ label, path }: ButtonToScrollProps) => {
  return (
    <LinkScroll
      className="inline-block transform cursor-pointer hover:scale-105 motion-reduce:transform-none focus:outline-none py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md shadow-md font-medium"
      to={path}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
    >
      {label}
    </LinkScroll>
  )
}

export default ButtonToScroll
