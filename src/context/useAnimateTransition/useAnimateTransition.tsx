'use client'

// context/AnimationContext.tsx
import { createContext, useContext, useState, ReactNode, useRef, RefObject } from 'react'

type AnimationContextType = {
  isAnimating: boolean
  animate: (value: 'in' | 'out') => void
  wrapperRef: RefObject<HTMLBodyElement>
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const wrapperRef = useRef<HTMLBodyElement>(null)

  const animate = (mode: 'in' | 'out') => {
    setIsAnimating(mode === 'in')
  }

  return (
    <AnimationContext.Provider value={{ isAnimating, animate, wrapperRef }}>
      <body ref={wrapperRef}>{children}</body>
    </AnimationContext.Provider>
  )
}

export const useAnimateTransition = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}
