import { DropDownMenuProps } from '../interfaces'

const DropDownMenu = ({
  onClickSetCategory,
  category,
  listCategoties,
  divRef,
}: DropDownMenuProps) => {
  return (
    <div
      ref={divRef}
      className="transform hover:scale-105 motion-reduce:transform-none transition ease-in duration-200 rounded-lg shadow-lg overflow-hidden"
    >
      <ul className="w-56">
        {listCategoties.map((item: string) => (
          <li
            onClick={() => onClickSetCategory(item)}
            key={item}
            className={`${
              item === category ? 'bg-primary-crimson' : 'bg-primary-red'
            } focus:bg-primary-crimson cursor-pointer font-medium px-4 py-3 text-sm text-primary-white  hover:bg-primary-crimson transition ease-in duration-200`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDownMenu
