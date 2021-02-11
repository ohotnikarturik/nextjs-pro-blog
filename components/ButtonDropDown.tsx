import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonDropDown = () => {
  return (
    <button className="inline-flex focus:outline-none items-center py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md font-bold">
      Category
      <div className="ml-2">
        <FontAwesomeIcon width={15} icon={'chevron-down'} />
        <FontAwesomeIcon width={15} icon={'coffee'} />
      </div>
    </button>
  )
}

export default ButtonDropDown
