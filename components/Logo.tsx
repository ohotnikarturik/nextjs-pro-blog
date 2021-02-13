import Link from 'next/link'
export interface LogoProps {
  footerStyle?: boolean
}

const Logo = ({ footerStyle }: LogoProps) => {
  return (
    <Link href="/">
      <a className="transform hover:scale-105 motion-reduce:transform-none transition ease-in duration-200">
        <span
          className={`font-leckerli cursor-pointer text-3xl text-primary-${
            footerStyle ? 'white' : 'black'
          }`}
        >
          Pro<span className="text-primary-red">Blog</span>
        </span>
      </a>
    </Link>
  )
}

export default Logo
