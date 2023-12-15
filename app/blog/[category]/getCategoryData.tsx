import { directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { cache } from 'react'

export const getCategoryData = cache(async (categorySlug: string) => {
  try {
    const category = await directus.request(
      readItems('category', {
        filter: {
          slug: {
            _eq: categorySlug,
          },
        },
        fields: [
          '*',
          'posts.*',
          'posts.author.id',
          'posts.author.first_name',
          'posts.author.last_name',
          'posts.category.id',
          'posts.category.title',
          'posts.category.slug',
        ],
      }),
    )

    return category?.[0]
  } catch (error) {
    throw new Error('Error Fetching Posts')
  }
})
