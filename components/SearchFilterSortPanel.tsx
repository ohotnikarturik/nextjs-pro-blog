import React, { useState, useEffect, useRef } from 'react'

import ButtonDropDownMenu from './ButtonDropDownMenu'
import DropDownMenu from './DropDownMenu'
import SearchForm from './SearchForm'
import ReverseListIcon from './ReverseListIcon'

export interface SearchFilterSortPanelProps {
  getSearchInputValue: (value: string) => void
  onClickReversList: () => void
}

const SearchFilterSortPanel = ({
  getSearchInputValue,
  onClickReversList,
}: SearchFilterSortPanelProps) => {
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
    <div className="flex flex-col justify-around md:justify-start md:flex-row h-40 md:h-24">
      <div className="w-full md:flex-1 mt-4 md:mt-0 flex items-center justify-start">
        <ButtonDropDownMenu
          onClick={onClickMenuOpen}
          label={category}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <div className="w-full md:flex-1 order-first md:order-none flex items-center justify-start md:justify-center">
        <SearchForm getSearchInputValue={getSearchInputValue} />
      </div>
      <div className="w-full md:flex-1 flex items-center justify-end">
        <ReverseListIcon onClickReversList={onClickReversList} />
      </div>
      <div className="left-8 top-24 md:top-16 mt-3 absolute">
        {isMenuOpen && (
          <DropDownMenu divRef={divRef} onClick={onClickChooseCategory} />
        )}
      </div>
    </div>
  )
}

export default SearchFilterSortPanel
