import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ButtonDropDownMenuProps } from '../interfaces/index'

const ButtonDropDownMenu = ({
  label,
  onClickMenuOpen,
  isMenuOpen,
}: ButtonDropDownMenuProps) => {
  return (
    <button
      onClick={onClickMenuOpen}
      className="transform hover:scale-105 motion-reduce:transform-none flex justify-between shadow-md focus:outline-none focus:bg-primary-crimson items-center w-40 py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md font-medium"
    >
      {label}
      <div className={`ml-2 ${isMenuOpen ? 'transform rotate-180' : null}`}>
        <FontAwesomeIcon width={15} icon={'chevron-down'} />
      </div>
    </button>
  )
}

export default ButtonDropDownMenu
