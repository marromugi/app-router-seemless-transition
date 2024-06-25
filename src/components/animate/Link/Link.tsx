'use client'

import { useRouter } from '@/libs/next/useRouter'
import { ComponentProps } from 'react'

export const Link = ({ ...props }: ComponentProps<'a'>) => {
  const router = useRouter()
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    if (props.href) router.push(props.href)
  }
  return <a {...props} onClick={handleClick} />
}
