import { PaginationProps } from '../interfaces'

const Pagination = ({
  paginate,
  postPerPage,
  totalPosts,
  currentPage,
}: PaginationProps) => {
  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="flex">
      <ul className="flex flex-wrap justify-center">
        {pageNumbers.map((number: number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className={`${
              currentPage === number
                ? 'bg-primary-crimson scale-105 motion-reduce:transform-none'
                : 'bg-primary-black'
            } transform hover:scale-105 mb-2 motion-reduce:transform-none hover:bg-primary-crimson shadow-md transition ease-in duration-200 cursor-pointer flex items-center justify-center w-8 h-8 font-semibold opacity-90 text-primary-white rounded-full mx-3`}
          >
            <button className="focus:outline-none">{number}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
