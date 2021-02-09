import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
