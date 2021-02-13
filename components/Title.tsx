import React from 'react'

import { TitleProps } from '../interfaces/index'

const Title = ({ label }: TitleProps) => {
  return (
    <div className="font-bold font-nunito text-3xl text-primary-black">
      {label}
    </div>
  )
}

export default Title
