import React, { useState } from 'react'

import ButtonDropDownMenu from './ButtonDropDownMenu'
import DropDownMenu from './DropDownMenu'
import SearchInput from './SearchInput'
import SortItem from './SortItem'

const SearchFilterSortPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [category, setCategory] = useState('Categories')

  const onClickMenuOpen = () => setIsMenuOpen(!isMenuOpen)
  const onClickChooseCategory = (value: string) => {
    setCategory(value)
    setIsMenuOpen(false)
  }

  return (
    <div className="flex h-24">
      <div className="w-1/3 flex items-center justify-start">
        <ButtonDropDownMenu
          onClick={onClickMenuOpen}
          label={category}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <SearchInput />
      </div>
      <div className="w-1/3 flex items-center justify-end">
        <SortItem />
      </div>
      {isMenuOpen && <DropDownMenu onClick={onClickChooseCategory} />}
    </div>
  )
}

export default SearchFilterSortPanel
