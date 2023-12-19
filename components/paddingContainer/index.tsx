import { ReactNode } from 'react'

export default function PaddingContainer({
  children,
}: {
  children: ReactNode
}) {
  return <div className="px-4 md:px-8 w-full max-w-7xl mx-auto">{children}</div>
}
