import { Baby, EnvelopeOpen, Flag, MapPin } from 'phosphor-react'
import React from 'react'

export function Profile() {
  return (
    <aside className="mx-auto rounded-lg bg-backgroundLight p-4 px-12 lg:mx-0 ">
      <a
        href="https://github.com/kayooliveira"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="mx-auto -mt-14 w-48 rounded-xl border-2 border-transparent bg-backgroundLight shadow-md transition-all hover:blur-sm"
          src="https://github.com/kayooliveira.png"
          alt="Kayo"
        />
      </a>
      <span className="mt-2 block text-center text-lg leading-relaxed">
        Kayo Oliveira
      </span>
      <strong className="block text-center text-xs leading-snug text-brand-100">
        Full Stack Developer
      </strong>
      <div className="mt-4 flex flex-col items-start justify-start gap-4">
        <span className="flex items-center gap-2 text-sm">
          <Baby weight="fill" fill="#E62DF6" size="20" /> 20 anos
        </span>
        <span className="flex items-center gap-2 text-sm">
          <EnvelopeOpen weight="fill" fill="#E62DF6" size="20" />{' '}
          contato@kayooliveira.com
        </span>
        <span className="flex items-center gap-2 text-sm">
          <MapPin weight="fill" fill="#E62DF6" size="20" /> Cachoeiras de Macacu
          - RJ
        </span>
        <span className="flex items-center gap-2 text-sm">
          <Flag weight="fill" fill="#E62DF6" size="20" /> Português / Inglês
        </span>
      </div>
    </aside>
  )
}
