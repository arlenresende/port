import CTA from '@/components/cta'
import PaddingContainer from '@/components/paddingContainer'
import PostBody from '@/components/post/post-body'
import SinglePostHero from '@/components/post/single-post-hero'
import SocialLinks from '@/components/socialLinks'
import SiteConfig from '@/info/site'
import { directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { notFound } from 'next/navigation'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { getSinglePost } from './getSinglePost'

export const generateStaticParams = async () => {
  try {
    const posts = await directus.request(
      readItems('post', {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        fields: ['slug'],
      }),
    )

    const params = posts?.map((post) => {
      return {
        slug: post.slug as string,
      }
    })

    return params || []
  } catch (error) {
    throw new Error('Error Fetching Posts')
  }
}

export const generateMetadata = async ({
  params: { slug },
}: {
  params: {
    slug: string
  }
}) => {
  const postData = await getSinglePost(slug)
  return {
    title: postData?.title,
    description: postData?.description,
    openGraph: {
      title: postData?.title,
      description: postData?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${slug}`,
      siteName: SiteConfig.siteName,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${slug}/opengraph-image.png`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'pt-br',
      type: 'website',
    },
  }
}

export default async function Single({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const postSlug = params.slug
  const post = await getSinglePost(postSlug)

  /* Structure Data for Google */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${postSlug}/opengraph-image.png`,
    author: post.author.first_name + ' ' + post.author.last_name,
    genre: post.category.title,
    publisher: {
      '@type': 'Organization',
      name: SiteConfig.siteName,
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://google.com/article',
    },
    datePublished: new Date(post.date_created).toISOString(),
    dateCreated: new Date(post.date_created).toISOString(),
    dateModified: new Date(post.date_updated).toISOString(),
    description: post.description,
    articleBody: post.body,
  }

  if (!post) {
    notFound()
  }
  return (
    <PaddingContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-10">
        {/* @ts-expect-error Server Component */}
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
