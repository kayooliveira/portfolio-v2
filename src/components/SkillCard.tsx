import React from 'react'

interface CardProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGElement> & {
      size?: number | string
    }
  >
  title: string
}

export function SkillCard({ Icon, title }: CardProps) {
  return (
    <div className="group mx-2 my-2 flex shrink-0 items-center justify-center gap-4 rounded-lg border-2 border-highlight-800 bg-background px-6 py-4 hover:border-highlight-200">
      <div className="flex h-8 w-8 items-center justify-center transition-all group-hover:scale-110 lg:h-16 lg:w-16">
        <Icon size={50} />
      </div>
      <div>
        <strong className="text-lg lg:text-2xl">{title}</strong>
      </div>
    </div>
  )
}
