import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('')
  console.log(inputValue)

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  return (
    <form className="relative w-64">
      <input
        className=" placeholder-primary-gray border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200"
        type="text"
        placeholder="Search Post by Title..."
        name="search"
        value={inputValue}
        onChange={onChangeInputValue}
      />
      <div className="text-primary-red absolute top-1/2 transform -translate-y-1/2 right-3 ">
        <FontAwesomeIcon width={20} icon={'search'} />
      </div>
    </form>
  )
}

export default SearchInput
