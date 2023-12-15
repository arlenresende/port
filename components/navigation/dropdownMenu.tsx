import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu'

import { ReactNode } from 'react'

interface DropdownMenuContentRoot {
  onOpenChange(): void
  children: ReactNode
  open: boolean
}
export function DropdownMenuRoot({
  children,
  onOpenChange,
  open,
}: DropdownMenuContentRoot) {
  return (
    <RdxDropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      {children}
    </RdxDropdownMenu.Root>
  )
}

export function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger className="outline-none" asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

interface DropdownMenuContentProps {
  children: ReactNode
  className?: string
}

export function DropdownMenuContent({ children }: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        side="bottom"
        className={
          'z-[99999] rounded-2xl py-2 px-4 bg-white space-y-2 shadow-lg data-[side=bottom]:animate-slideDownAndFade'
        }
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

interface DropdownMenuItemProps {
  children: ReactNode
  className?: string
  onSelect?(): void
}
export function DropdownMenuItem({
  children,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={
        'cursor-pointer min-h-[40px] outline-none flex items-center justify-start p-2 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors'
      }
    >
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
}
