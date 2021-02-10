import Head from 'next/head'
import Button from '../components/Button'
import Subtitle from '../components/Subtitle'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ProBlog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>
      <section className="bg-primary-silver h-screen">
        <div className="container">
          <div>
            <h1 className="text-primary-gray font-bold text-5xl">
              Welcome to <span className="text-primary-black">Pro</span>
              <span className="text-primary-red">Blog</span> web app
            </h1>
            <Subtitle label="Here you can find and read most popular topics" />
            <Button label="Latest Posts" href="/" />
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section></section>
    </div>
  )
}
