import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'

import logo from '../assets/img/logo.png'
export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-backgroundLight shadow-lg">
      <div className="lg:px-auto mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 py-2">
        <a href="#">
          <img src={logo} alt="Logo" className="w-16" />
        </a>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a
              href="https://github.com/kayooliveira"
              className="text-brand-100 transition-colors hover:text-highlight-100"
            >
              <GithubLogo size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/kayooliveiradev"
              className="text-brand-100 transition-colors hover:text-highlight-100"
            >
              <InstagramLogo size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kayooliveiradev"
              className="text-brand-100 transition-colors hover:text-highlight-100"
            >
              <LinkedinLogo size="30" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
