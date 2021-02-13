import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import Title from '../components/Title'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'
import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'
import { IPost } from '../interfaces'
import Subtitle from '../components/Subtitle'

const postList = [
  {
    id: 1,
    title: 'Some Awesome topc',
    postImg: '/post-img.jpg',
    textContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.',
    authorImg: '/profile.png',
    authorName: 'Artur Okhotnichenko',
    date: '12 January 2021',
    badgeColor: 'purple',
    category: 'Lifestyle',
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
    badgeColor: 'green',
    category: 'Technology',
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
    badgeColor: 'blue',
    category: 'Interviews',
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
    badgeColor: 'gray',
    category: 'Food',
  },
  {
    id: 5,
    title: 'Hi Top 10',
    postImg: '/post-img.jpg',
    textContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.',
    authorImg: '/profile.png',
    authorName: 'Artur Okhotnichenko',
    date: '12 January 2021',
    badgeColor: 'gray',
    category: 'Food',
  },
]

const blog = () => {
  const [searchFormValue, setSearchFormValue] = useState('')
  const [posts, setPosts] = useState<Array<IPost>>([])
  console.log('newPostsArray======', posts)

  const getSearchInputValue = (value: string) => {
    setSearchFormValue(value)
  }

  const onClickReversPosts = () => {
    const reversedPosts = [...posts].reverse()
    setPosts(reversedPosts)
  }

  const onSelectCategory = (category: string) => {
    console.log('category on blog', category)
    if (category === 'All Categories') {
      setPosts(postList)
    } else {
      const filteredCategory = postList.filter(
        (item) => item.category === category
      )

      console.log('filteredCategory@@@', filteredCategory)
      setPosts(filteredCategory)
    }
  }

  useEffect(() => {
    const filteredPosts = postList.filter((post) =>
      post.title.toLowerCase().includes(searchFormValue.toLocaleLowerCase())
    )
    // console.log('&&&&&&', filteredPosts)

    setPosts(filteredPosts)
  }, [searchFormValue])

  return (
    <>
      <Head>
        <title>ProBlog App | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="flex flex-col justify-start">
        <div className="container mt-14 mb-7">
          <Title label="Blog." />
        </div>
        <div className="z-20 mb-14 bg-primary-white opacity-95">
          <div className="container relative">
            <SearchFilterSortPanel
              getSearchInputValue={getSearchInputValue}
              onClickReversPosts={onClickReversPosts}
              onSelectCategory={onSelectCategory}
            />
          </div>
        </div>
        <div className="container flex items-center justify-center pb-40">
          {!posts.length ? (
            <Subtitle
              boldStyle
              color="purple"
              label="No matches found. Try again!"
            />
          ) : (
            <PostCard posts={posts} />
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
