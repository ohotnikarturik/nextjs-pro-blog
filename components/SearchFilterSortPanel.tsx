import React, { useState, useEffect, useRef } from 'react'

import ButtonDropDownMenu from './ButtonDropDownMenu'
import DropDownMenu from './DropDownMenu'
import SearchForm from './SearchForm'
import SortItem from './SortItem'

const SearchFilterSortPanel = () => {
  const divRef = React.useRef<HTMLElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [category, setCategory] = useState('Categories')

  const onClickMenuOpen = () => setIsMenuOpen(!isMenuOpen)
  const onClickChooseCategory = (value: string) => {
    setCategory(value)
    setIsMenuOpen(false)
  }

  const onMouseDown = (event: MouseEvent) => {
    if (divRef.current?.contains(event.target as Node)) {
      console.log('chose category:', divRef.current)
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', onMouseDown)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
    }
  }, [])

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
        <SearchForm />
      </div>
      <div className="w-1/3 flex items-center justify-end">
        <SortItem />
      </div>
      {isMenuOpen && (
        <DropDownMenu divRef={divRef} onClick={onClickChooseCategory} />
      )}
    </div>
  )
}

export default SearchFilterSortPanel
