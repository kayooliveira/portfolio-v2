import React from 'react'

import { About } from './components/About'
import { Header } from './components/Header'
import { Profile } from './components/Profile'

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-40 box-border flex max-w-[1100px] flex-col items-start justify-center gap-8 px-2 lg:flex-row">
        <Profile />
        <About />
      </div>
    </>
  )
}
