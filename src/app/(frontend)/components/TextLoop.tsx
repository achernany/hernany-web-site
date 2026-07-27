'use client'

import { useEffect, useState } from 'react'

interface TextLoopProps {
  items: string[]
  intervalMs?: number
}

export function TextLoop({ items, intervalMs = 2000 }: TextLoopProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % items.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [items.length, intervalMs])

  if (items.length === 0) return null

  return (
    <span className="textloop" aria-live="polite">
      <span key={index} className="textloop-item">
        {items[index]}
      </span>
    </span>
  )
}
