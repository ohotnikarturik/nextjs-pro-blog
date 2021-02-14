import React, { useEffect, useState } from 'react'
import ButtonScrollUp from './ButtonScrollUp'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FunctionComponent = ({ children }) => {
  const [isShowOverlay, setIsShowOverlay] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setIsShowOverlay(true)
    } else {
      setIsShowOverlay(false)
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
      {isShowOverlay && (
        <div className="fixed z-50 right-2 md:right-8 bottom-10 md:bottom-10">
          <ButtonScrollUp />
        </div>
      )}
    </div>
  )
}

export default Layout
