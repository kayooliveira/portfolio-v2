import React from 'react'

import { IconProps } from '../@types'

interface CardProps {
  Icon: React.ComponentType<IconProps>
  title: string
}

export function SkillCard({ Icon, title }: CardProps) {
  return (
    <div className="group my-2 mx-2 flex shrink-0 items-center justify-center gap-4 rounded-lg border-2 border-highlight-800 bg-background px-6 py-4 hover:border-highlight-200">
      <Icon className="h-8 w-8 transition-all group-hover:scale-110 lg:h-16 lg:w-16" />
      <div>
        <strong className="text-lg lg:text-2xl">{title}</strong>
      </div>
    </div>
  )
}
