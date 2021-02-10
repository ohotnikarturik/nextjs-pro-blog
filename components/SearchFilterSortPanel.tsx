import React, { useState } from 'react'

import Button from './Button'
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
    <div className="bg-primary-pink">
      <div className="container flex justify-between items-center h-24 relative">
        <Button
          onClick={onClickMenuOpen}
          path="#"
          icon="chevron-down"
          label={category}
          isMenuOpen={isMenuOpen}
        />
        {isMenuOpen && <DropDownMenu onClick={onClickChooseCategory} />}
        <SearchInput />
        <SortItem />
      </div>
    </div>
  )
}

export default SearchFilterSortPanel
