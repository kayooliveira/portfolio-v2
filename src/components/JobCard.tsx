import React from 'react'

interface JobCardProps {
  image: string
  company: string
  description: string
  url: string
}

export function JobCard({ image, company, description, url }: JobCardProps) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="group relative my-2 mx-2 flex max-w-[200px] shrink-0 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border-2 border-highlight-800 bg-background px-6 py-4 hover:border-highlight-200"
    >
      <img
        src={image}
        className="absolute z-10 h-full rounded-lg opacity-50 blur-md transition-all group-hover:scale-110 group-hover:opacity-100 group-hover:blur-sm"
        alt={company + 'icone'}
      />
      <div className="z-20">
        <strong className="block text-center text-lg lg:text-2xl">
          {company + ' '}
        </strong>
        <span className="block text-center text-xs">{description}</span>
      </div>
    </a>
  )
}
