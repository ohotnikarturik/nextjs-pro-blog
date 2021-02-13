import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
