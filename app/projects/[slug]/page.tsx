import { DUMMY_POSTS } from '@/DUMMY_DATA'
import CTA from '@/components/cta'
import PaddingContainer from '@/components/paddingContainer'
import PostBody from '@/components/post/post-body'
import SinglePostHero from '@/components/post/single-post-hero'
import SocialLinks from '@/components/socialLinks'

import { notFound } from 'next/navigation'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

export default function SingleProject({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <PaddingContainer>
      <div className="space-y-10">
        <SinglePostHero post={post} />
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex md:flex-col gap-4 items-center">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLinks
                isSharedUrl
                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
                platform={<FaLinkedin size={18} />}
              />
              <SocialLinks
                isSharedUrl
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
                platform={<FiTwitter size={18} />}
              />
              <SocialLinks
                isSharedUrl
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
                platform={<FaFacebook size={18} />}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        <CTA />
      </div>
    </PaddingContainer>
  )
}
