import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import Title from '../components/Title'
import SearchFilterSortPanel from '../components/SearchFilterSortPanel'
import CardList from '../components/CardList'
import Pagination from '../components/Pagination'
import { IPost } from '../interfaces'
import Subtitle from '../components/Subtitle'

const posts = [
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
  const [newPostsArray, setNewPostsArray] = useState<Array<IPost>>([])

  const getSearchInputValue = (value: string) => {
    setSearchFormValue(value)
  }

  const onClickReversList = () => {
    const reversedPostList = [...newPostsArray].reverse()
    setNewPostsArray(reversedPostList)
  }

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(searchFormValue.toLocaleLowerCase())
    )

    setNewPostsArray(result)
  }, [searchFormValue])

  return (
    <>
      <Head>
        <title>ProBlog App | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="min-h-screen flex flex-col justify-start">
        <div className="container mt-14 mb-7">
          <Title label="Blog." />
        </div>
        <div className="z-20 mb-14 bg-primary-white opacity-95">
          <div className="container relative">
            <SearchFilterSortPanel
              getSearchInputValue={getSearchInputValue}
              onClickReversList={onClickReversList}
            />
          </div>
        </div>
        <div className="container flex items-center justify-center mb-28">
          {!newPostsArray.length ? (
            <Subtitle
              boldStyle
              color="purple"
              label="No matches found. Try again!"
            />
          ) : (
            <CardList posts={newPostsArray} />
          )}
        </div>
        <div className="container mb-10 flex justify-center mt-auto">
          <Pagination />
        </div>
      </section>
    </>
  )
}

export default blog
