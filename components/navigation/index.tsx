'use client'
import Link from 'next/link'
import PaddingContainer from '../paddingContainer'
import DarkModeButton from '../darkMode'
import { DropdownMenu } from './dropdownMenu'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const router = useRouter()
  return (
    <div
      className={`border-b sticky z-[999] top-0 lef-0 right-0 bg-white dark:bg-big-stone bg-opacity-50 dark:bg-opacity-100 backdrop-blur-md`}
    >
      <PaddingContainer>
        <div className="py-5 flex items-center justify-between">
          <Link href="/" className="font-extrabold  text-sm md:text-xl">
            {`<`} Arlen Resende {`/>`}
          </Link>
          {/* Categories Links */}
          <div>
            <nav className="flex items-center justify-between gap-6">
              <ul className="flex items-center gap-4 text-neutral-600 dark:text-white">
                <li>
                  <Link
                    href="/projects"
                    className=" font-bold hover:text-big-stone dark:hover:text-sun"
                  >
                    Projects
                  </Link>
                </li>

                <DropdownMenu.Root
                  onOpenChange={() => setOpenModal(!openModal)}
                  open={openModal}
                >
                  <DropdownMenu.Trigger>
                    <div className="cursor-pointer font-bold hover:text-big-stone dark:hover:text-sun">
                      Blog
                    </div>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Content className="w-32">
                    <DropdownMenu.Item onSelect={() => router.push('/blog')}>
                      <div
                        className="flex font-bold hover:text-big-stone dark:hover:text-sun w-full"
                        onClick={() => setOpenModal(!openModal)}
                      >
                        All Posts
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      onSelect={() => router.push('/blog/technology')}
                    >
                      <div
                        className="flex font-bold hover:text-big-stone dark:hover:text-sun w-full"
                        onClick={() => setOpenModal(!openModal)}
                      >
                        Technology
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Link
                        href="/blog/learning-and-growth"
                        className=" font-bold  hover:text-big-stone dark:hover:text-sun"
                        onClick={() => setOpenModal(!openModal)}
                      >
                        Learning and Growth
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Link
                        href="/blog/development"
                        className=" font-bold  hover:text-big-stone dark:hover:text-sun"
                        onClick={() => setOpenModal(!openModal)}
                      >
                        Development
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Link
                        href="/blog/design-and-creativity"
                        className=" font-bold  hover:text-big-stone dark:hover:text-sun"
                        onClick={() => setOpenModal(!openModal)}
                      >
                        Design and Creativity
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </ul>
              <DarkModeButton />
            </nav>
          </div>
        </div>
      </PaddingContainer>
    </div>
  )
}
