import { useRef, useState } from 'react'

type TipProps = {
  text: string
  children: React.ReactNode
}

const TIP_W = 230
const MARGIN = 8

export function Tip({ text, children }: TipProps) {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const [boxStyle, setBoxStyle] = useState<React.CSSProperties>({})

  const handleMouseEnter = () => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const wordCenter = rect.left + rect.width / 2

    let boxLeft = wordCenter - TIP_W / 2
    if (boxLeft < MARGIN) boxLeft = MARGIN
    if (boxLeft + TIP_W > window.innerWidth - MARGIN) {
      boxLeft = window.innerWidth - MARGIN - TIP_W
    }

    const shift = boxLeft - (wordCenter - TIP_W / 2)
    const arrowPct = ((wordCenter - boxLeft) / TIP_W) * 100

    setBoxStyle({
      transform: `translateX(calc(-50% + ${shift}px))`,
      '--tip-arrow': `${arrowPct.toFixed(1)}%`,
    } as React.CSSProperties)
  }

  return (
    <span className='tip' ref={wrapRef} onMouseEnter={handleMouseEnter}>
      {children}
      <span className='tip-box' style={boxStyle}>{text}</span>
    </span>
  )
}
