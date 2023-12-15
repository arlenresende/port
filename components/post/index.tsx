import { Post } from '@/types/collections'
import Image from 'next/image'
import Link from 'next/link'
import PostContent from './content'

interface PostCardProps {
  post: Post
  layout?: 'vertical' | 'horizontal'
  reverse?: boolean
  type?: 'blog' | 'projects'
}

export default function PostCard({
  post,
  layout = 'horizontal',
  reverse = false,
  type = 'blog',
}: PostCardProps) {
  return (
    <Link
      href={`${
        type === 'blog' ? `/blog/post/${post.slug}` : `/projects/${post.slug}`
      }`}
      className={`${
        layout === 'horizontal'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-10 items-center'
          : 'space-y-10'
      }`}
    >
      <Image
        className={`rounded-md w-full object-cover object-center max-h-[300px] ${
          reverse ? 'md:order-last' : ''
        }`}
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post?.image}?key=optimised`}
        alt={post?.title}
        width={600}
        height={300}
      />
      <PostContent post={post} />
    </Link>
  )
}
