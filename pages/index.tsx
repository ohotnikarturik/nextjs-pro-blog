import Head from 'next/head'
import Image from 'next/image'

import Button from '../components/Button'
import Subtitle from '../components/Subtitle'
import SocialItems from '../components/SocialItems'
import CardList from '../components/CardList'
import Title from '../components/Title'

export default function Home() {
  return (
    <>
      <Head>
        <title>ProBlog App | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="h-screen">
        <div className="container h-full flex flex-col justify-evenly ">
          <div className="w-full relative">
            <div className="flex flex-col items-center md:items-start z-50">
              <h1 className="text-primary-black text-center md:text-left font-bold text-5xl mb-3">
                Welcome to <span className="text-primary-black">Pro</span>
                <span className="text-primary-red">Blog</span> web app
              </h1>
              <div className="mb-8 text-center md:text-left">
                <Subtitle label="Here you can find and read the most popular topics" />
              </div>
              <div className="mb-5">
                <Button label="Latest Posts" path="/" />
              </div>
            </div>
            <div className="absolute z-10 top-0 right-0 invisible lg:visible">
              <Image
                src="/home-img.svg"
                alt="Read blog image"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="flex z-50 justify-center md:justify-start">
            <SocialItems />
          </div>
        </div>
      </section>
      <section className="min-h-screen relative">
        <div className="container mt-10 mb-28 ">
          <div className="mb-7">
            <Title label="Latest Posts." />
          </div>
          <CardList />
        </div>
      </section>
    </>
  )
}
