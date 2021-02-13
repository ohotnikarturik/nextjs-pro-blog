import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSortAmountDown,
  faSortAmountDownAlt,
} from '@fortawesome/free-solid-svg-icons'

import { ReverseListItemProps } from '../interfaces/'

const ReverseListItem = ({ onClickReversPosts }: ReverseListItemProps) => {
  const [switchIcon, setSwitchIcon] = useState(false)

  return (
    <div
      onClick={() => {
        setSwitchIcon(!switchIcon)
        onClickReversPosts()
      }}
      className="transform hover:scale-105 motion-reduce:transform-none text-primary-red cursor-pointer hover:text-primary-crimson transition ease-in duration-200"
    >
      {!switchIcon ? (
        <FontAwesomeIcon width={30} icon={faSortAmountDown} />
      ) : (
        <FontAwesomeIcon width={30} icon={faSortAmountDownAlt} />
      )}
    </div>
  )
}

export default ReverseListItem
