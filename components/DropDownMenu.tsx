import { DropDownMenuProps } from '../interfaces'

const dropDownMenuItems = [
  { id: 0, category: 'All Categories' },
  { id: 1, category: 'Lifestyle' },
  { id: 2, category: 'Technologies' },
  { id: 3, category: 'Nature' },
  { id: 4, category: 'Food' },
]

const DropDownMenu = ({
  onClickSetCategory,
  category,
}: // divRef,
DropDownMenuProps) => {
  return (
    <div
      // ref={divRef}
      className="transform hover:scale-105 motion-reduce:transform-none transition ease-in duration-200 rounded-lg shadow-lg overflow-hidden"
    >
      <ul className="w-56">
        {dropDownMenuItems.map((item) => (
          <li
            onClick={() => onClickSetCategory(item.category)}
            key={item.id}
            className={`${
              item.category === category
                ? 'bg-primary-crimson'
                : 'bg-primary-red'
            } focus:bg-primary-crimson cursor-pointer font-medium px-4 py-3 text-sm text-primary-white  hover:bg-primary-crimson transition ease-in duration-200`}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDownMenu
