import Image from 'next/image'
import Button from './Button'
import Subtitle from './Subtitle'

const cardList = [
  {
    id: 1,
    title: 'Some Awesome topic',
    postImg: '/post-img.jpg',
    textContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.',
    authorImg: '/profile.png',
    authorName: 'Artur Okhotnichenko',
    date: '12 January 2021',
  },
  {
    id: 2,
    title: 'Some Awesome topic',
    postImg: '/post-img.jpg',
    textContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.,',
    authorImg: '/profile.png',
    authorName: 'Artur Okhotnichenko',
    date: '12 January 2021',
  },
  {
    id: 3,
    title: 'Some Awesome topic',
    postImg: '/post-img.jpg',
    textContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.',
    authorImg: '/profile.png',
    authorName: 'Artur Okhotnichenko',
    date: '12 January 2021',
  },
  {
    id: 4,
    title: 'Some Awesome topic',
    postImg: '/post-img.jpg',
    textContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.',
    authorImg: '/profile.png',
    authorName: 'Artur Okhotnichenko',
    date: '12 January 2021',
  },
]

const CardList = () => {
  return (
    <ul className="grid lg:grid-cols-3 gap-x-10 gap-y-20 md:grid-cols-2">
      {cardList.map((item) => (
        <li
          className="relative rounded-md shadow-lg hover:shadow-2xl cursor-pointer transition ease-in duration-200"
          key={item.id}
        >
          <div className=" bg-primary-white overflow-hidden rounded-md">
            <div className="h-1/2">
              <Image
                src={item.postImg}
                layout="responsive"
                width={385}
                height={285}
                quality={100}
                alt="Post image"
              />
            </div>
            <div className="h-1/2 px-4 pt-4 pb-7">
              <div className="h-full">
                <Subtitle cardStyle label={item.title} />
                <div className="h-16 max-h-16 overflow-scroll">
                  <span>{item.textContent}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center">
                  <Image
                    className="rounded"
                    src={item.authorImg}
                    alt="Profile"
                    width={30}
                    height={30}
                    quality={100}
                  />
                  <span className="ml-3 font-medium text-sm">
                    {item.authorName}
                  </span>
                </div>
                <div>
                  <span className="text-xs">{item.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-3 -bottom-5">
            <Button label="Read more" path="/post" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CardList
