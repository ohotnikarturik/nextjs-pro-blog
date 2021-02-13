import Link from 'next/link'
import { useRouter } from 'next/router'

const navBarItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
export interface NavBarProps {
  footerStyle?: boolean
  overlayStyle?: boolean
}

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
                  `border-primary-${
                    footerStyle ? 'none' : 'crimson'
                  } text-primary-${footerStyle ? 'pink' : 'crimson '}`
                } border-b-2 font-leckerli border-transparent text-primary-${
                  footerStyle ? 'white' : 'red'
                } font-${footerStyle ? 'light' : 'medium'} text-${
                  footerStyle ? 'lg' : 'xl'
                } hover:text-primary-${
                  footerStyle ? 'pink' : 'crimson'
                } hover:border-primary-${
                  footerStyle ? 'none' : 'crimson'
                } hover:border-b-2 transition ease-in duration-200 ${
                  overlayStyle && 'text-3xl font-bold font-leckerli'
                }`}
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
