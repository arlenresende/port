'use client'
import { directus } from '@/lib/directus'
import { createItem } from '@directus/sdk'
import { useState, FormEvent } from 'react'

import 'react-toastify/dist/ReactToastify.css'

export default function CTA() {
  // const formAction = async (formData: FormData) => {
  //   'use server'

  //   try {
  //     const email = formData.get('email')
  //     await directus.request(createItem('subscribers', { email }))
  //   } catch (error) {}
  // }

  const [email, setEmail] = useState('')
  const [isHandling, setIsHandling] = useState(false)

  const submitHandler = async (e: FormEvent) => {
    try {
      e.preventDefault()
      setIsHandling(true)
      await directus.request(createItem('subscribers', { email }))
      setIsHandling(false)
      setEmail('')
    } catch (error) {
      console.log(error)
      setIsHandling(false)
    }
  }
  return (
    <div className="px-6 py-10 rounded-md bg-big-stone ">
      <div>
        <div>
          <h3 className="font-semibold text-2xl text-big-stone">#contactme</h3>
        </div>
        <p className="mt-2 max-w-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          malesuada dolor. Sed placerat leo sem, quis interdum erat vulputate
          ut.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="mt-6 flex flex-col md:flex-row items-center gap-2"
      >
        <input
          type="email"
          name="email"
          className="placeholder:text-black dark:placeholder:text-white  text-base rounded-md px-3 py-2 outline-none focus:ring-2 ring-neutral-600 w-full md:w-auto"
          placeholder="Write your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <button className="bg-sun rounded-md px-3 py-2 text-base text-big-stone font-bold  w-full md:w-auto">
          {!isHandling ? ' Sing Up' : 'Sending...'}
        </button>
      </form>
    </div>
  )
}
