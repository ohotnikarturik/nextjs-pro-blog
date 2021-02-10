import React from 'react'

import Header from './Header'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
