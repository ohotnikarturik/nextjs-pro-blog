import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import Meta from '../../components/Meta'
import Subtitle from '../../components/Subtitle'
import Title from '../../components/Title'
import Badge from '../../components/Badge'
import NotFoundPost404 from '../../components/NotFoudPost404'
import ButtonBack from '../../components/ButtonBack'
import { PostProps, IObjectPost, Params } from '../../interfaces/'

// contentful connection
const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFULL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const data = await client.getEntries({
    content_type: 'post',
  })

  return {
    paths: data.items.map((post: IObjectPost) => ({
      params: { id: post.sys.id },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const data = await client.getEntries({
    content_type: 'post',
    'sys.id': params.id,
  })

  return {
    props: {
      post: data.items[0],
    },
  }
}

const post = ({ post }: PostProps) => {
  if (!post) {
    return <NotFoundPost404 />
  }

  return (
    <>
      <Meta
        title={post.fields.title}
        description={`${post.fields.excerpt}`}
        keywords="post"
      />

      <section className="container min-h-screen flex flex-col pb-40">
        <div className="mt-7">
          <ButtonBack />
        </div>
        <div className="mb-16 text-center md:hidden">
          <Title label="Post." />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-full sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-3/5">
            <div className="mb-4 md:mt-4">
              <Subtitle boldStyle label={post.fields.title} />
            </div>
            <div className="relative shadow-md">
              <Image
                className="rounded-md overflow-hidden"
                src={'https:' + post.fields.postImg.fields.file.url}
                alt="Read blog image"
                width={post.fields.postImg.fields.file.details.image.width}
                height={post.fields.postImg.fields.file.details.image.height}
                layout="responsive"
                quality={70}
                objectFit="cover"
              />
              <div className="absolute top-0 left-0 ">
                <Badge postStyle label={post.fields.category} />
              </div>
            </div>
            <div className="my-8 flex justify-between items-center ">
              <div className="flex items-center">
                <Image
                  className="rounded-full shadow"
                  src={'https:' + post.fields.authorImg.fields.file.url}
                  alt="Profile"
                  width={30}
                  height={30}
                  quality={100}
                  objectFit={'cover'}
                />
                <span className="ml-3 font-medium text-sm">
                  {post.fields.authorName}
                </span>
              </div>
              <span className="text-xs font-medium">{post.fields.date}</span>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="mb-10">
                <div>
                  {documentToReactComponents(post.fields.content, {
                    renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: (node) => (
                        <Image
                          className="rounded-md overflow-hidden"
                          src={'https:' + node.data.target.fields.file.url}
                          alt="Read blog image"
                          width={
                            node.data.target.fields.file.details.image.width
                          }
                          height={
                            node.data.target.fields.file.details.image.height
                          }
                          layout="responsive"
                          quality={100}
                          objectFit="cover"
                        />
                      ),
                    },
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default post
