import Head from 'next/head'
import Image from 'next/image'

import Subtitle from '../../components/Subtitle'
import Title from '../../components/Title'

const contentList = [
  {
    id: 1,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

const post = () => {
  return (
    <>
      <Head>
        <title>ProBlog App | Post</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="container min-h-screen flex flex-col pb-16">
        <div className="mb-7 mt-14">
          <Title label="Post." />
        </div>
        <Image
          className="rounded-md overflow-hidden"
          src="/single-post-img.jpg"
          alt="Read blog image"
          width={900}
          height={400}
          layout="responsive"
          quality={50}
          objectFit="cover"
        />
        <div className="flex justify-center">
          <div className="flex flex-col w-full sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-3/5">
            <div className="mt-8 flex justify-between items-center ">
              <span className="text-xs font-medium">{'12 January 2021'}</span>
              <div className="flex items-center">
                <Image
                  className="rounded"
                  src="/profile.png"
                  alt="Profile"
                  width={30}
                  height={30}
                  quality={100}
                />
                <span className="ml-3 font-medium text-sm">
                  {'Artur Okhotnichenko'}
                </span>
              </div>
            </div>
            <div className="my-8">
              <Subtitle
                boldStyle
                label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <ul className="">
                {contentList.map((item) => (
                  <li key={item.id} className="mb-10">
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default post
