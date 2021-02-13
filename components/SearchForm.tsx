import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SearchFormProps } from '../interfaces/'

const SearchForm = ({ getSearchInputValue }: SearchFormProps) => {
  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    getSearchInputValue(event.currentTarget.value)
  }

  return (
    <form className="relative w-full sm:w-3/4 md:w-64">
      <input
        className="focus:shadow-lg placeholder-primary-red placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200"
        type="text"
        placeholder="Search Post by Title..."
        name="search"
        onChange={onChangeInputValue}
      />
      <div className="text-primary-red absolute top-1/2 transform -translate-y-1/2 right-3 ">
        <FontAwesomeIcon width={20} icon={'search'} />
      </div>
    </form>
  )
}

export default SearchForm
