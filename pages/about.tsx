import Image from 'next/image'

import Meta from '../components/Meta'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

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
]

const about = () => {
  return (
    <>
      <Meta
        title="ProBlog App | About"
        description="About page"
        keywords="about"
      />
      <section className="container min-h-screen flex flex-col pb-40">
        <div className="mb-7 mt-14">
          <Title label="About." />
        </div>
        <Image
          className="rounded-md overflow-hidden"
          src="/about-img.jpg"
          alt="Read blog image"
          width={900}
          height={420}
          layout="responsive"
          quality={50}
          objectFit="cover"
        />
        <div className="flex justify-center">
          <div className="w-full sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-3/5">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default about
