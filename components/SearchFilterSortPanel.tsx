import React, { useState, useEffect, useRef } from 'react'

import ButtonDropDownMenu from './ButtonDropDownMenu'
import DropDownMenu from './DropDownMenu'
import SearchForm from './SearchForm'
import ReverseListItem from './ReverseListItem'
import { SearchFilterSortPanelProps } from '../interfaces/'

const SearchFilterSortPanel = ({
  getSearchInputValue,
  onClickReversPosts,
  onSelectCategory,
  listCategoties,
}: SearchFilterSortPanelProps) => {
  const divRef = React.useRef<HTMLElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [category, setCategory] = useState('All Categories')

  const onClickMenuOpen = () => setIsMenuOpen(!isMenuOpen)
  const onClickSetCategory = (value: string) => {
    setCategory(value)
    onSelectCategory(value)
    setIsMenuOpen(false)
  }
  // close DropDownMenu if mouse clicks outside of DropDownMenu
  const onMouseDown = (event: MouseEvent) => {
    if (divRef.current && !divRef.current?.contains(event.target as Node)) {
      console.log('category', category)
      setIsMenuOpen(false)
    }
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
          onClickMenuOpen={onClickMenuOpen}
          label={category}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <div className="w-full mb-3 md:mb-0 md:flex-1 order-first md:order-none flex items-center justify-start md:justify-center">
        <SearchForm getSearchInputValue={getSearchInputValue} />
      </div>
      <div className="w-full md:flex-1 flex items-center justify-end">
        <ReverseListItem onClickReversPosts={onClickReversPosts} />
      </div>
      <div className=" top-28 md:top-16 mt-3 absolute">
        {isMenuOpen && (
          <DropDownMenu
            divRef={divRef}
            onClickSetCategory={onClickSetCategory}
            category={category}
            listCategoties={listCategoties}
          />
        )}
      </div>
    </div>
  )
}

export default SearchFilterSortPanel
