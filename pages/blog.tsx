import Head from 'next/head'

import Title from '../components/Title'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'
import CardList from '../components/CardList'
import Pagination from '../components/Pagination'

const blog = () => {
  return (
    <>
      <Head>
        <title>ProBlog App | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="min-h-screen flex flex-col">
        <div className="container mt-14 mb-7">
          <Title label="Blog." />
        </div>
        <div className="sticky top-0 z-20 mb-14 bg-primary-white opacity-95">
          <div className="container relative">
            <SearchFilterSortPanel />
          </div>
        </div>
        <div className="container mb-28">
          <CardList />
        </div>
        <div className="container mb-10 flex justify-center">
          <Pagination />
        </div>
      </section>
    </>
  )
}

export default blog
