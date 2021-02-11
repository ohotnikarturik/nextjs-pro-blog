import Head from 'next/head'
import Image from 'next/image'

import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

const contentList = [
  {
    id: 1,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 1,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

const about = () => {
  return (
    <>
      <Head>
        <title>ProBlog App | About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="container min-h-screen flex flex-col pb-16">
        <div className="mt-14">
          <div className="mb-7">
            <Title label="About." />
          </div>
        </div>
        <Image
          className="rounded-md overflow-hidden"
          src="/about-img.jpg"
          alt="Read blog image"
          width={900}
          height={500}
          layout="responsive"
          quality={100}
        />
        <div className="my-8">
          <Subtitle
            boldStyle
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <ul>
          {contentList.map((item) => (
            <li key={item.id} className="mb-10">
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default about
