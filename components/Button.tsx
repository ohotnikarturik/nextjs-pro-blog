import Link from 'next/link'

import { ButtonProps } from '../interfaces/index'

const Button = ({ label, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <a className="py-2 px-4 bg-primary-red text-primary-white rounded-md font-bold">
        {label}
      </a>
    </Link>
  )
}

export default Button
