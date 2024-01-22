import React from 'react'
import Bottombar from '../shared/Bottombar'
import LeftSidebar from '../shared/LeftSidebar'
import RightSidebar from '../shared/RightSidebar'
import Topbar from '../shared/Topbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <main>
        <LeftSidebar />
        <section className='main-container'>
          <div className='w-full max-w-4xl'>{children}</div>
        </section>
        <RightSidebar />
      </main>
      <Bottombar />
    </>
  )
}

export default Layout
