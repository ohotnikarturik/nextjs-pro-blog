const dropDownMenuItems = [
  { id: 1, category: 'Lifestyle' },
  { id: 2, category: 'Technology' },
  { id: 3, category: 'Interviews' },
  { id: 4, category: 'Food' },
]

export interface DropDownMenuProps {
  onClick: any // fix
}

const DropDownMenu = ({ onClick }: DropDownMenuProps) => {
  return (
    <ul className="absolute left-4 top-16 mt-2 w-56 rounded-lg shadow-lg bg-white">
      {dropDownMenuItems.map((item) => (
        <li
          onClick={() => onClick(item.category)}
          key={item.id}
          className="cursor-pointer px-4 py-2 text-sm text-primary-white bg-primary-red hover:bg-primary-crimson transition ease-in duration-200"
        >
          {item.category}
        </li>
      ))}
    </ul>
  )
}

export default DropDownMenu
