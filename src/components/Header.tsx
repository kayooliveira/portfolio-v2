import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'

import { Logo } from './Logo'

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-backgroundLight shadow-lg">
      <div className="lg:px-auto mx-auto flex w-full max-w-[1100px] items-center justify-between py-2 px-4">
        <a href="#">
          <Logo width="60" />
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
              href="https://instagram.com/kayooliveira.dev"
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
