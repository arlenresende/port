import { getRelativeDate } from '@/lib/helpers'
import { Post } from '@/types/collections'
import { FaArrowRight } from 'react-icons/fa6'

interface PostContentProps {
  post: Post
  isPostPage?: boolean
}

export default function PostContent({
  post,
  isPostPage = false,
}: PostContentProps) {
  return (
    <div className="space-y-2">
      <div className=" text-xs lg:text-sm flex  gap-1 md:gap-2 items-center text-neutral-400 dark:text-white">
        <div className="font-medium text-big-stone dark:text-white">
          {post?.category?.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{`${post?.author?.first_name} ${post?.author?.last_name}`} </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div> 1 min</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getRelativeDate(post?.date_created)}</div>
      </div>
      {!isPostPage ? (
        <h2 className="font-medium text-xl md:text-2xl lg:text-2xl">
          {post?.title}
        </h2>
      ) : (
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl py-4">
          {post?.title}
        </h1>
      )}

      <p className=" text-neutral-600 leading-snug text-sm md:text-base dark:text-white">
        {post?.description}
      </p>
      {!isPostPage && (
        <div className="flex items-center gap-2 font-bold pt-3  text-sm md:text-base">
          Read More <FaArrowRight size="14" />
        </div>
      )}
    </div>
  )
}
