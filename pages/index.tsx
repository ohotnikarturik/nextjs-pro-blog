import Head from 'next/head'
import Image from 'next/image'

import Button from '../components/Button'
import Subtitle from '../components/Subtitle'
import SocialItems from '../components/SocialItems'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ProBlog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>
      <section className="h-screen bg-primary-silver">
        <div className="container h-full flex flex-col justify-around">
          <div className="flex w-full">
            <div className="flex flex-col items-start w-3/4">
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
            <div className="w-1/4">
              <Image
                src="/home-image.svg"
                alt="Read blog image"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div>
            <SocialItems />
          </div>
        </div>
      </section>
      <section>
        <div className="h-full">
          <SearchFilterSortPanel />
        </div>
      </section>
    </div>
  )
}
