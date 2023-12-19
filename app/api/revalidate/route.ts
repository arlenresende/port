import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')
  // If there is no token, return a 401
  if (!token || token !== process.env.NEXT_PRIVATE_DIRECTUS_TOKEN)
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  // Revalidate All Posts
  revalidatePath(`/blog/post/[slug]`)
  // Revalidate All Categories
  revalidatePath(`/blog/[category]`)
  // Revalidate Page
  revalidatePath(`/blog`)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
