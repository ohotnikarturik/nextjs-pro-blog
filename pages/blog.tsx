import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'

import Meta from '../components/Meta'
import Title from '../components/Title'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'
import PostCardList from '../components/PostCardList'
import Pagination from '../components/Pagination'
import { IPost } from '../interfaces'
import Subtitle from '../components/Subtitle'

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

interface BlogProps {
  listPosts: any
}

const blog = ({ listPosts }: any) => {
  const [searchFormValue, setSearchFormValue] = useState('')
  const [posts, setPosts] = useState<Array<IPost>>([])

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
        (item: any) => item.fields.category === category
      )

      setPosts(filteredCategory)
    }
  }

  useEffect(() => {
    const filteredPosts = listPosts.filter((post: any) =>
      post.fields.title
        .toLowerCase()
        .includes(searchFormValue.toLocaleLowerCase())
    )

    setPosts(filteredPosts)
  }, [searchFormValue])

  return (
    <>
      <Meta
        title="ProBlog App | Blog"
        description="Blog page"
        keywords="blog, post, posts"
      />
      <section className="flex flex-col justify-start">
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
        <div className="container w-full pb-40">
          {!posts.length ? (
            <div className="w-full flex justify-center">
              <Subtitle
                boldStyle
                color="purple"
                label="No matches found. Try again!"
              />
            </div>
          ) : (
            <PostCardList posts={posts} />
          )}
        </div>
        <div className="container mb-20 flex justify-center mt-auto">
          <Pagination />
        </div>
      </section>
    </>
  )
}

export default blog
