import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-500">
      <Head>
        <title>ProBlog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <span className="text-primary-gray font-extrabold text-5xl">
        Welcome to Pro<span className="text-primary-red">Blog</span> web app
      </span>
    </div>
  )
}
