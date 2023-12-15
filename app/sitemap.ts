import { directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string

  // Get Posts
  const posts = await directus.request(
    readItems('post', {
      fields: ['slug', 'date_updated'],
    }),
  )

  const postLinks = posts?.map((post) => {
    return [
      {
        url: `${baseURL}/blog/post/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
    ]
  })

  // Get Categories
  const categories = await directus.request(
    readItems('category', {
      fields: ['slug', 'date_updated'],
    }),
  )

  const categoryLinks = categories?.map((category) => {
    return [
      {
        url: `${baseURL}/blog/${category.slug}`,
        lastModified: new Date(),
      },
    ]
  })

  const dynamicLinks = postLinks?.concat(categoryLinks ?? []).flat() ?? []

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
    },
    ...dynamicLinks,
  ]
}
