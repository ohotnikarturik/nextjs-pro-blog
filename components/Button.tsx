import Link from 'next/link'

import { ButtonProps } from '../interfaces/index'

const Button = ({ label, path, onClick }: ButtonProps) => {
  return (
    <Link href={path}>
      <button
        onClick={onClick}
        className="flex focus:outline-none items-center py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md font-medium"
      >
        {label}
      </button>
    </Link>
  )
}

export default Button
