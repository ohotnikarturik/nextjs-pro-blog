const dropDownMenuItems = [
  { id: 1, category: 'Lifestyle' },
  { id: 2, category: 'Technology' },
  { id: 3, category: 'Interviews' },
  { id: 4, category: 'Food' },
]

export interface DropDownMenuProps {
  onClick: any // fix
  divRef: any // fix
}

const DropDownMenu = ({ onClick, divRef }: DropDownMenuProps) => {
  return (
    <div
      ref={divRef}
      className="left-4 top-16 mt-3 absolute rounded-lg shadow-lg overflow-hidden"
    >
      <ul className="w-56">
        {dropDownMenuItems.map((item) => (
          <li
            onClick={() => onClick(item.category)}
            key={item.id}
            className="cursor-pointer font-medium px-4 py-3 text-sm text-primary-white bg-primary-red hover:bg-primary-crimson transition ease-in duration-200"
          >
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDownMenu
