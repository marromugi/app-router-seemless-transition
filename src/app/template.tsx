'use client'

import { useAnimateTransition } from '@/context/useAnimateTransition'
import { useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'

export default function Template({ children }: { children: React.ReactNode }) {
  const { wrapperRef } = useAnimateTransition()
  useEffect(() => {
    const tl = gsap.timeline()
    tl.set(wrapperRef.current, {
      opacity: 0,
      filter: 'blur(10px)'
    }).to(wrapperRef.current, {
      duration: 0.5,
      opacity: 1,
      filter: 'blur(0px)',
      ease: 'power1.in'
    })
  }, [])

  return <>{children}</>
}
