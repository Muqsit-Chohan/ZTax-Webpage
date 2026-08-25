import type { ReactNode } from 'react'

export default function Badge({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-brand-light/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand ${className}`}
    >
      {children}
    </span>
  )
}
