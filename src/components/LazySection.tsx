import {
  type ReactNode,
  Suspense,
  startTransition,
  useEffect,
  useRef,
  useState,
} from 'react'

type LazySectionProps = {
  children: ReactNode
  minHeight: number
  rootMargin?: string
}

export default function LazySection({
  children,
  minHeight,
  rootMargin = '900px 0px',
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const placeholderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (shouldRender) {
      return
    }

    const placeholder = placeholderRef.current

    if (!placeholder || typeof window === 'undefined') {
      return
    }

    if (!('IntersectionObserver' in globalThis)) {
      const timeoutId = globalThis.setTimeout(() => {
        startTransition(() => {
          setShouldRender(true)
        })
      }, 0)

      return () => globalThis.clearTimeout(timeoutId)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }

        startTransition(() => {
          setShouldRender(true)
        })

        observer.disconnect()
      },
      { rootMargin },
    )

    observer.observe(placeholder)

    return () => observer.disconnect()
  }, [rootMargin, shouldRender])

  const fallback = (
    <div
      ref={placeholderRef}
      aria-hidden="true"
      style={{ containIntrinsicSize: `${minHeight}px`, contentVisibility: 'auto', minHeight }}
    />
  )

  if (!shouldRender) {
    return fallback
  }

  return <Suspense fallback={fallback}>{children}</Suspense>
}
