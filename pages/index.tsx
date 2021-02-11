import Head from 'next/head'
import Image from 'next/image'

import Button from '../components/Button'
import Subtitle from '../components/Subtitle'
import SocialItems from '../components/SocialItems'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'
import CardList from '../components/CardList'
import Pagination from '../components/Pagination'
import Title from '../components/Title'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ProBlog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>
      <section className="h-screen">
        <div className="container h-full flex flex-col justify-around">
          <div className="flex w-full relative ">
            <div className="flex flex-col items-start w-3/4 z-50">
              <h1 className="text-primary-black font-bold text-5xl mb-3">
                Welcome to <span className="text-primary-black">Pro</span>
                <span className="text-primary-red">Blog</span> web app
              </h1>
              <div className="mb-8">
                <Subtitle label="Here you can find and read the most popular topics" />
              </div>
              <div className="mb-5">
                <Button label="Latest Posts" path="/" />
              </div>
            </div>
            <div className="w-1/4 relative ">
              <Image
                className="absolute z-10"
                src="/home-image.svg"
                alt="Read blog image"
                width={600}
                height={600}
              />
            </div>
            <div className="invisible md:visible absolute z-0 top-20 right-0">
              <Image src="/shape-1.svg" alt="Shape" width={600} height={600} />
            </div>
          </div>
          <div className="z-50">
            <SocialItems />
          </div>
        </div>
      </section>
      <section className="min-h-screen relative">
        <div className="bg-primary-pink sticky top-0 z-50">
          <div className="container relative">
            <SearchFilterSortPanel />
          </div>
        </div>
        <div className="container my-24">
          <div className="mb-8">
            <Title label="Latest Posts." />
          </div>
          <CardList />
        </div>
        <div className="container mb-10 flex justify-center">
          <Pagination />
        </div>
      </section>
    </div>
  )
}
