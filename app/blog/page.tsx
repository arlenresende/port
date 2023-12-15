import { DUMMY_POSTS } from '@/DUMMY_DATA'
import CTA from '@/components/cta'
import PaddingContainer from '@/components/paddingContainer'
import PostCard from '@/components/post'
import PostList from '@/components/post/list'
import SiteConfig from '@/info/site'
import { directus } from '@/lib/directus'

import { readItems } from '@directus/sdk'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Blog | Arlen Resende Full Stack Developer',
  description:
    'Dive into Arlen Resende Blog – a journey through the realms of coding, tech trends, and innovative solutions. Stay informed, inspired, and connected in the dynamic world of Full Stack Development.',
  openGraph: {
    title: 'Blog | Arlen Resende Full Stack Developer',
    description:
      'Dive into Arlen Resende Blog – a journey through the realms of coding, tech trends, and innovative solutions. Stay informed, inspired, and connected in the dynamic world of Full Stack Development.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    siteName: SiteConfig.siteName,
    images: [
      {
        url: 'http://localhost:3000/opengraph-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_br',
    type: 'website',
  },
}

export default async function Blog() {
  const getPosts = async () => {
    try {
      return await directus.request(
        readItems('post', {
          fields: [
            '*',
            { author: ['first_name', 'last_name', 'id'] },
            { category: ['id', 'title', 'slug'] },
          ],
        }),
      )
    } catch (error) {
      throw new Error('Error Fetching Posts')
    }
  }

  const posts = await getPosts()

  if (!posts) {
    notFound()
  }
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        {/* @ts-expect-error Server Component */}
        <PostCard post={posts[0]} />

        <PostList
          // @ts-expect-error Server Component
          posts={posts.filter((_post, index) => index > 0 && index < 2)}
        />
        <CTA />
        <PostCard reverse post={DUMMY_POSTS[3]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  )
}
