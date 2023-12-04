'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AddTopicForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`/api/topics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (!res.ok) {
        throw new Error('Failed to add topic')
      }
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Topic Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-500 p-4"
      />
      <textarea
        type="text"
        placeholder="Topic description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-500 p-4 h-32"
      />
      <button
        type="submit"
        className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
      >
        Add Topic
      </button>
    </form>
  )
}
