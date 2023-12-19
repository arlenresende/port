import { Post } from '@/types/collections'
import PostContent from './content'
import Image from 'next/image'

interface SinglePostHeroProps {
  post: Post
}

export default function SinglePostHero({ post }: SinglePostHeroProps) {
  return (
    <div>
      <PostContent isPostPage={true} post={post} />
      <Image
        priority
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post?.image}?key=optimised`}
        width={1280}
        height={500}
        alt={post.title}
      />
    </div>
  )
}
