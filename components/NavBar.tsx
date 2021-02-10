import Link from 'next/link'
import { useRouter } from 'next/router'

const navBarItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const NavBar = () => {
  const router = useRouter()

  return (
    <nav>
      <ul className="flex">
        {navBarItems.map((item) => (
          <li className="ml-7" key={item.path}>
            <Link href={item.path}>
              <a
                className={`${
                  router.pathname === item.path &&
                  'border-primary-crimson text-primary-crimson'
                } border-b border-transparent text-primary-gray text-lg hover:text-primary-crimson hover:border-primary-crimson hover:border-b transition ease-in duration-200`}
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
