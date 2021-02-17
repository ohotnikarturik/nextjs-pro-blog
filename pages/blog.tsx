import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'

import Meta from '../components/Meta'
import Title from '../components/Title'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'
import PostCardList from '../components/PostCardList'
import { BlogProps, IObjectPost } from '../interfaces'
import Loader from '../components/Loader'

// contentful
const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFULL_ACCESS_TOKEN,
})

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getEntries({
    content_type: 'post',
  })

  return {
    props: {
      listPosts: data.items,
    },
  }
}

const blog = ({ listPosts }: BlogProps) => {
  const [searchFormValue, setSearchFormValue] = useState('')
  const [posts, setPosts] = useState<Array<IObjectPost>>([])

  useEffect(() => {
    const filteredPosts = listPosts.filter((post: IObjectPost) =>
      post.fields.title
        .toLowerCase()
        .includes(searchFormValue.toLocaleLowerCase())
    )

    setPosts(filteredPosts)
  }, [searchFormValue])

  const getSearchInputValue = (value: string) => {
    setSearchFormValue(value)
  }

  const onClickReversPosts = () => {
    const reversedPosts = [...posts].reverse()
    setPosts(reversedPosts)
  }

  const onSelectCategory = (category: string) => {
    if (category === 'All Categories') {
      setPosts(listPosts)
    } else {
      const filteredCategory = listPosts.filter(
        (item: IObjectPost) => item.fields.category === category
      )

      setPosts(filteredCategory)
    }
  }

  return (
    <>
      <Meta
        title="ProBlog App | Blog"
        description="Blog page"
        keywords="blog, post, posts"
      />
      <section className="flex pb-10 flex-col justify-start">
        <div className="container mt-14 mb-7">
          <Title label="Blog." />
        </div>
        <div className="z-20 mb-14 bg-primary-white opacity-95">
          <div className="container relative">
            <SearchFilterSortPanel
              posts={posts}
              getSearchInputValue={getSearchInputValue}
              onClickReversPosts={onClickReversPosts}
              onSelectCategory={onSelectCategory}
            />
          </div>
        </div>
        <div className="container w-full">
          {!posts ? (
            <div className="w-full flex justify-center">
              <Loader label="Loading..." />
            </div>
          ) : (
            <PostCardList posts={posts} />
          )}
        </div>
      </section>
    </>
  )
}

export default blog
