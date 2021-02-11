import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const paginationList = [
  { id: 1, path: '/' },
  { id: 2, path: '/' },
  { id: 3, path: '/' },
]

const Pagination = () => {
  return (
    <div className="flex">
      <Link href="#">
        <a className="hover:bg-primary-crimson shadow-md transition ease-in duration-200 cursor-pointer transform rotate-90 flex items-center justify-center w-9 h-9 bg-primary-black font-semibold text-primary-white rounded-full mx-3">
          <FontAwesomeIcon width={15} icon={'chevron-down'} />
        </a>
      </Link>
      <ul className="flex">
        {paginationList.map((item) => (
          <li
            key={item.id}
            className="hover:bg-primary-crimson shadow-md transition ease-in duration-200 cursor-pointer flex items-center justify-center w-9 h-9 bg-primary-black font-semibold text-primary-white rounded-full mx-3"
          >
            <Link href={item.path}>
              <a>{item.id}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="#">
        <a className="hover:bg-primary-crimson shadow-md transition ease-in duration-200 cursor-pointer transform -rotate-90 flex items-center justify-center w-9 h-9 bg-primary-black font-semibold text-primary-white rounded-full mx-3">
          <FontAwesomeIcon width={15} icon={'chevron-down'} />
        </a>
      </Link>
    </div>
  )
}

export default Pagination
