import { Post } from '@/types/collections'
import PostCard from '.'

interface PostListProps {
  posts: Post[]
  layout?: 'vertical' | 'horizontal'
}

export default function PostList({
  posts,
  layout = 'vertical',
}: PostListProps) {
  return (
    <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  )
}
