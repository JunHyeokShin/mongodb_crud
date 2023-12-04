'use client'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const { status, data: session } = useSession()
  return (
    <nav className="flex bg-red-900 justify-between px-8 py-4 items-center">
      <Link href="/" className="text-white text-lg font-bold">
        MongoDB CRUD
      </Link>
      <div className="flex gap-3">
        <Link
          href="/addTopic"
          className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md"
        >
          Add Topic
        </Link>
        {status === 'authenticated' ? (
          // 로그인된 상태
          <>
            <button
              onClick={() => signOut()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Image
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              <span className="text-white font-bold">
                {session?.user?.name}
              </span>
            </div>
          </>
        ) : (
          // 로그인 안된 상태
          <>
            <Link
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold"
              href="/signIn"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
