import React from 'react'

import { TitleProps } from '../interfaces/index'

const Title = ({ label }: TitleProps) => {
  return (
    <div className="font-semibold text-3xl text-primary-black">{label}</div>
  )
}

export default Title
