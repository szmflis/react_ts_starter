import React, { LiHTMLAttributes } from 'react'

export const RawListElement: React.FC<LiHTMLAttributes<HTMLLIElement>> = (props: LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={props.className} {...props}>
      {props.children}
    </li>
  )
}
