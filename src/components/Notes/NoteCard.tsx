import { useState } from 'react'

type NoteCardProps = {
  label: string
  children: React.ReactNode
  wide?: boolean
}

export function NoteCard({ label, children, wide }: NoteCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`notes-card${wide ? ' notes-card-wide' : ''}`}>
      <div className='notes-card-label' onClick={() => setOpen(o => !o)}>
        <span>{label}</span>
        <span className='notes-card-toggle'>{open ? '−' : '+'}</span>
      </div>
      <div className={`notes-card-body${open ? ' open' : ''}`}>
        {children}
      </div>
    </div>
  )
}
