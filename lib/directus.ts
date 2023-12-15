import { createDirectus } from '@directus/sdk'
import { rest } from '@directus/sdk/rest'
import { staticToken } from '@directus/sdk/auth'

export const directus = createDirectus(
  process.env.NEXT_PUBLIC_DIRECTUS_API as string,
)
  .with(rest())
  .with(staticToken(process.env.NEXT_PRIVATE_DIRECTUS_TOKEN as string))
