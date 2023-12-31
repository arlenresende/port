import Link from 'next/link'
import { ReactNode } from 'react'

interface SocialLinksProps {
  platform: ReactNode
  link: string
  isSharedUrl?: boolean
  title: string
}
export default function SocialLinks({
  platform,
  link,
  title,
  isSharedUrl = false,
}: SocialLinksProps) {
  return (
    <Link href={link} title={title}>
      <div
        className={`${
          isSharedUrl &&
          'py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:dark:text-sun hover:bg-neutral-600 hover:text-neutral-400 duration-100 easy-in-out transition-colors'
        }`}
      >
        {platform}
      </div>
    </Link>
  )
}
