import React from 'react'

import { IconProps } from '../../@types'

export function AWS({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#f90"
        fillRule="evenodd"
        d="M15.63 31.388l-7.135-2.56V18.373l7.135 2.43zm1.3 0l7.135-2.56V18.373l-7.135 2.432zm-7.7-13.8l7.2-2.033 6.696 2.16-6.696 2.273zm-2.092-.8L0 14.22V3.75l7.135 2.43zm1.307 0l7.135-2.56V3.75L8.443 6.192zm-7.7-13.8l7.2-2.043 6.696 2.16-6.696 2.273zm23.052 13.8l-7.135-2.56V3.75l7.135 2.43zm1.3 0l7.135-2.56V3.75l-7.135 2.43zm-7.7-13.8l7.2-2.033 6.696 2.16-6.696 2.273z"
      ></path>
    </svg>
  )
}