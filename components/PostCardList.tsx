import { useState } from 'react'
import { useRouter } from 'next/router'

import { CardListProps } from '../interfaces'
import PostCardItem from './PostCardItem'
import Pagination from './Pagination'

const CardList = ({ posts }: any) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(1)

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
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
          : currentPosts.map((post: any) => (
              <li
                className="relative rounded-md shadow-lg hover:shadow-2xl cursor-pointer transition ease-in duration-200"
                key={post.sys.id}
              >
                <PostCardItem post={post} />
              </li>
            ))}
      </ul>
      {router.pathname !== '/' && (
        <div className="mt-28 flex justify-center">
          <Pagination
            currentPage={currentPage}
            paginate={paginate}
            postPerPage={postsPerPage}
            totalPosts={posts.length}
          />
        </div>
      )}
    </>
  )
}

export default CardList
