import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

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

const SocialItems = () => {
  return (
    <ul className="flex">
      {socialIcons.map((item) => (
        <li
          className="mr-4 text-primary-red hover:text-primary-crimson transition ease-in duration-200 cursor-pointer"
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
