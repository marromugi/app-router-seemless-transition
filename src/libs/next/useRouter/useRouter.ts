import { useAnimateTransition } from '@/context/useAnimateTransition'
import gsap from 'gsap'
import { useRouter as useNextRouter } from 'next/navigation'

export const useRouter = () => {
  const router = useNextRouter()
  const { wrapperRef } = useAnimateTransition()

  const push = (...args: Parameters<typeof router.push>) => {
    if (!wrapperRef.current) {
      router.push(...args)
      return
    }

    gsap.to(wrapperRef.current, {
      duration: 0.5,
      opacity: 0,
      filter: 'blur(10px)',
      ease: 'power1.out',
      onComplete: () => {
        router.push(args[0]) // フェードアウト完了後にページを移動
      }
    })
  }

  return {
    ...router,
    push
  }
}
