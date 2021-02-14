import Image from 'next/image'

import Badge from './Badge'
import Button from './Button'
import Subtitle from './Subtitle'
import { PostCardItemProps } from '../interfaces'

const PostCardItem = ({ post }: PostCardItemProps) => {
  return (
    <>
      <div className=" bg-primary-white overflow-hidden rounded-md">
        <div className="h-1/2 relative">
          <Image
            src={post.postImg}
            layout="responsive"
            width={385}
            height={285}
            quality={100}
            alt="Post image"
          />
          <div className="absolute left-0 bottom-0">
            <Badge color={post.badgeColor} label={post.category} />
          </div>
        </div>
        <div className="h-1/2 px-4 pt-4 pb-7">
          <div className="h-full">
            <Subtitle boldStyle label={post.title} />
            <div className="h-20 mt-3 max-h-20 overflow-scroll">
              <span>{post.textContent}</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center">
              <Image
                className="rounded"
                src={post.authorImg}
                alt="Profile"
                width={30}
                height={30}
                quality={100}
              />
              <span className="ml-3 font-medium text-sm">
                {post.authorName}
              </span>
            </div>
            <div>
              <span className="text-xs font-medium">{post.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-3 -bottom-5">
        <Button label="Read more" path="post/[id]" as={`post/${post.id}`} />
      </div>
    </>
  )
}

export default PostCardItem
