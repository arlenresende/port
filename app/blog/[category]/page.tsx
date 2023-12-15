import PaddingContainer from '@/components/paddingContainer'

import PostList from '@/components/post/list'
import SiteConfig from '@/info/site'
import { directus } from '@/lib/directus'
import { Post } from '@/types/collections'
import { readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { getCategoryData } from './getCategoryData'

export const generateMetadata = async ({
  params: { category },
}: {
  params: {
    category: string
  }
}) => {
  const categoryData = await getCategoryData(category)
  return {
    title: categoryData?.title,
    description: categoryData?.description,
    openGraph: {
      title: categoryData?.title,
      description: categoryData?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}`,
      siteName: SiteConfig.siteName,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${category}/opengraph-image.png`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'pt-br',
      type: 'website',
    },
  }
}
export const generateStaticParams = async () => {
  try {
    const categories = await directus.request(
      readItems('category', {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        fields: ['slug'],
      }),
    )

    const params = categories?.map((category) => {
      return {
        category: category.slug as string,
      }
    })

    return params || []
  } catch (error) {
    throw new Error('Error Fetching Posts')
  }
}
export default async function Categories({
  params,
}: {
  params: { category: string }
}) {
  const categorySlug = params.category
  const category = await getCategoryData(categorySlug)

  if (!category) {
    notFound()
  }

  const typeCorrectCategory = category as unknown as {
    id: string
    title: string
    description: string
    slug: string
    posts: Post[]
  }

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="font-semibold text-3xl">{typeCorrectCategory?.title}</h1>
        <p className="text-lg text-neutral-600">
          {typeCorrectCategory?.description}
        </p>
      </div>
      <PostList posts={typeCorrectCategory.posts} />
    </PaddingContainer>
  )
}
