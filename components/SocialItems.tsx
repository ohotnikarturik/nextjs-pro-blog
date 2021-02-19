import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

import { SocialItemsProps } from '../interfaces/'

const socialIcons = [
  {
    id: 1,
    size: 25,
    name: faFacebookSquare,
    href: 'https://www.facebook.com/',
  },
  { id: 2, size: 25, name: faInstagramSquare, href: 'http://instagram.com/' },
  { id: 3, size: 25, name: faTwitterSquare, href: 'https://twitter.com/' },
  { id: 4, size: 25, name: faLinkedin, href: 'https://www.linkedin.com/' },
]

const SocialItems = ({ footerStyle }: SocialItemsProps) => {
  return (
    <ul className="flex">
      {socialIcons.map((item) => (
        <li
          className={`transform hover:scale-105 motion-reduce:transform-none ${
            footerStyle
              ? 'text-primary-white hover:text-primary-red'
              : 'text-primary-red hover:text-primary-crimson'
          } mx-4 s:mx-2 md:mx-0 md:mr-4 transition ease-in duration-200 cursor-pointer`}
          key={item.id}
        >
          <a href={item.href} rel="noreferrer" target="_blank">
            <FontAwesomeIcon width={item.size} icon={item.name} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialItems
