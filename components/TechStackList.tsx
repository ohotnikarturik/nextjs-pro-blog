import Image from 'next/image'
import Subtitle from './Subtitle'

const thechList = [
  {
    id: 1,
    description:
      'Next.js - is React.js web framework, which allows building server-side rendering and static web applications.',
    iconPath: '/images/next-js.svg',
    link: 'https://nextjs.org/',
  },
  {
    id: 2,
    description:
      'TypeScript - is a superset of the JavaScript language, helps catch mistakes early through a type system and to make JavaScript development more efficient.',
    iconPath: '/images/ts.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    id: 3,
    description:
      'Contentful - is CMS(Content Management System) platform where you can create, update and manage the content of your web application.',
    iconPath: '/images/contentful.svg',
    link: 'https://www.contentful.com/',
  },
  {
    id: 4,
    description:
      'Tailwind CSS - is a utility-first CSS framework for rapidly building custom user interfaces',
    iconPath: '/images/tailwindcss.svg',
    link: 'https://tailwindcss.com/',
  },
  {
    id: 5,
    description:
      'Cloud Firestore used for the contact form, to store leads in the real-time database.',
    iconPath: '/images/firebase.svg',
    link: 'https://firebase.google.com/',
  },
  {
    id: 6,
    description:
      'PWA(Progressive Web Application) - is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.',
    iconPath: '/images/pwa.svg',
    link: 'https://en.wikipedia.org/wiki/Progressive_web_application',
  },
]

const TechStackList = () => {
  return (
    <>
      <div className="mb-8 text-center md:text-left">
        <Subtitle
          color="black"
          boldStyle
          label="Technologies, by which ProBlog app was built"
        />
      </div>
      <ul className="flex h-full flex-col">
        {thechList.map((item) => (
          <li className="mb-10" key={item.id}>
            <a
              className="flex flex-col s:flex-row items-center"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="mr-5 mb-3 s:mb-0">
                <Image
                  alt="Thech icon"
                  width={40}
                  height={40}
                  src={item.iconPath}
                />
              </div>
              <div className="w-full p-4 border-2 border-primary-gray min-height-5 rounded-2xl shadow-md hover:shadow-2xl cursor-pointer transition ease-in duration-20">
                <div className="ml-3 text-primary-gray font-medium">
                  {item.description}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TechStackList
