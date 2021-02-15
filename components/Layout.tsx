import React, { useEffect, useState } from 'react'
import ButtonScrollUp from './ButtonScrollUp'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FunctionComponent = ({ children }) => {
  const [isShowButton, setIsShowButton] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY > 200) {
      setIsShowButton(true)
    } else {
      setIsShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
      {isShowButton && (
        <div className="fixed z-50 right-2 md:right-8 bottom-10 md:bottom-10">
          <ButtonScrollUp />
        </div>
      )}
    </div>
  )
}

export default Layout
