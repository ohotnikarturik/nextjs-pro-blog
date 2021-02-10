export interface LogoProps {
  footerStyle?: boolean
}

const Logo = ({ footerStyle }: LogoProps) => {
  return (
    <span
      className={`font-leckerli cursor-pointer text-3xl text-primary-${
        footerStyle ? 'white' : 'black'
      }`}
    >
      Pro<span className="text-primary-red">Blog</span>
    </span>
  )
}

export default Logo
