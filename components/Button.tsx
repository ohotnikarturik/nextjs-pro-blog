import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ButtonProps } from '../interfaces/index'

const Button = ({ label, path, icon, onClick, isMenuOpen }: ButtonProps) => {
  return (
    <Link href={path}>
      <button
        onClick={onClick}
        className="inline-flex focus:outline-none focus:bg-primary-crimson items-center py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md font-medium"
      >
        {label}
        {icon && (
          <div className={`ml-2 ${isMenuOpen ? 'transform rotate-180' : null}`}>
            <FontAwesomeIcon width={15} icon={icon} />
          </div>
        )}
      </button>
    </Link>
  )
}

export default Button
