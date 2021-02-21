import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavBarProps } from '../interfaces/'

const navBarItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Tech', path: '/tech' },
]

const NavBar = ({ footerStyle, overlayStyle }: NavBarProps) => {
  const router = useRouter()

  return (
    <nav>
      <ul className={`flex ${overlayStyle && 'flex-col text-center mb-20'}`}>
        {navBarItems.map((item) => (
          <li
            className={`${footerStyle ? 'mx-3 ' : 'ml-9'} ${
              overlayStyle && 'my-7'
            }`}
            key={item.path}
          >
            <Link href={item.path}>
              <a
                className={`${
                  router.pathname === item.path &&
                  `${
                    footerStyle
                      ? 'text-primary-pink'
                      : 'border-primary-crimson text-primary-crimson'
                  }`
                } border-b-2 font-leckerli border-transparent hover:border-b-2 transition ease-in duration-200 ${
                  footerStyle
                    ? 'text-primary-white font-light text-lg hover:text-primary-pink'
                    : 'text-primary-red font-medium text-xl hover:text-primary-crimson hover:border-primary-crimson'
                } ${overlayStyle && 'text-3xl font-bold font-leckerli'}`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
