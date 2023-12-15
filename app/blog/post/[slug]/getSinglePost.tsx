import { directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'

export const getSinglePost = async (postSlug: string) => {
  try {
    const post = await directus.request(
      readItems('post', {
        filter: {
          slug: {
            _eq: postSlug,
          },
        },
        fields: [
          '*',
          'posts.*',
          'author.id',
          'author.first_name',
          'author.last_name',
          'category.id',
          'category.title',
          'category.slug',
        ],
      }),
    )

    return post?.[0]
  } catch (error) {
    throw new Error('Error Fetching Posts')
  }
}
