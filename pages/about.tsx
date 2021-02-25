import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import ButtonBack from '../components/ButtonBack'
import Meta from '../components/Meta'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import { AboutProps } from '../interfaces'

// contentful connection
const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFULL_ACCESS_TOKEN,
})

// get about page content from contentful
export const getStaticProps = async () => {
  const data = await client.getEntries({
    content_type: 'aboutPage',
  })

  return {
    props: {
      data: data.items[0].fields,
    },
  }
}

const about = ({ data }: AboutProps) => {
  return (
    <>
      <Meta
        title="ProBlog App | About"
        description="About page"
        keywords="about"
      />
      <section className="container min-h-screen flex flex-col pb-40">
        <div className="mt-7 md:hidden">
          <ButtonBack />
        </div>
        <div className="mb-16 text-center md:hidden">
          <Title label="About." />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-full sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-3/5">
            <div className="shadow-md md:mt-20 rounded-md overflow-hidden">
              <Image
                src={'https:' + data.aboutImg.fields.file.url}
                alt="About blog image"
                width={data.aboutImg.fields.file.details.image.width}
                height={data.aboutImg.fields.file.details.image.height}
                layout="responsive"
                quality={70}
                objectFit="cover"
              />
            </div>
            <div className="my-8">
              <Subtitle boldStyle label={data.subtitle} />
            </div>
            <div className="mb-10">
              {documentToReactComponents(data.content, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node) => (
                    <Image
                      className="rounded-md overflow-hidden"
                      src={'https:' + node.data.target.fields.file.url}
                      alt="Read blog image"
                      width={node.data.target.fields.file.details.image.width}
                      height={node.data.target.fields.file.details.image.height}
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
      </section>
    </>
  )
}

export default about
