import { useRouter } from 'next/router'

import { CardListProps } from '../interfaces'
import PostCardItem from './PostCardItem'

const CardList = ({ posts }: any) => {
  const router = useRouter()

  return (
    <ul className="grid lg:grid-cols-3 gap-x-10 gap-y-28 md:grid-cols-2">
      {router.pathname === '/'
        ? posts.slice(0, 6).map((post: any) => (
            <li
              className="relative rounded-md shadow-lg hover:shadow-2xl cursor-pointer transition ease-in duration-200"
              key={post.sys.id}
            >
              <PostCardItem post={post} />
            </li>
          ))
        : posts.map((post: any) => (
            <li
              className="relative rounded-md shadow-lg hover:shadow-2xl cursor-pointer transition ease-in duration-200"
              key={post.sys.id}
            >
              <PostCardItem post={post} />
            </li>
          ))}
    </ul>
  )
}

export default CardList
