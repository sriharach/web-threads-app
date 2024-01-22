import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <main>
      <div className='h-screen'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </main>
  )
}

export default Page
