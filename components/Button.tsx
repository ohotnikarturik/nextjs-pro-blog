import Link from 'next/link'

import { ButtonProps } from '../interfaces/index'

const Button = ({ label, path, as, onClick }: ButtonProps) => {
  return (
    <Link href={path} as={as}>
      <button
        onClick={onClick}
        className="transform hover:scale-105 motion-reduce:transform-none focus:outline-none py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md shadow-md font-medium"
      >
        {label}
      </button>
    </Link>
  )
}

export default Button
