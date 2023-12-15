import { DUMMY_POSTS } from '@/DUMMY_DATA'
import PaddingContainer from '@/components/paddingContainer'
import PostCard from '@/components/post'

export default function Projects() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} type="projects" />
      </main>
    </PaddingContainer>
  )
}
