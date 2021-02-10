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
}

const NavBar = ({ footerStyle }: NavBarProps) => {
  const router = useRouter()

  return (
    <nav>
      <ul className="flex">
        {navBarItems.map((item) => (
          <li className="ml-9" key={item.path}>
            <Link href={item.path}>
              <a
                className={`${
                  router.pathname === item.path &&
                  `border-primary-${
                    footerStyle ? 'none' : 'crimson'
                  } text-primary-${footerStyle ? 'pink' : 'crimson'}`
                } border-b-2 border-transparent text-primary-${
                  footerStyle ? 'white' : 'gray'
                } font-semibold text-lg hover:text-primary-${
                  footerStyle ? 'pink' : 'crimson'
                } hover:border-primary-${
                  footerStyle ? 'none' : 'crimson'
                } hover:border-b-2 transition ease-in duration-200`}
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
