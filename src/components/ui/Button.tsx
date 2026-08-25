import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'inverse' | 'outline' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-950',
  inverse: 'bg-white text-brand hover:bg-gray-50',
  outline: 'bg-transparent text-brand border border-gray-200 hover:bg-white/60',
  ghost: 'bg-transparent text-white border border-white/30 hover:bg-white/10',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-medium transition-colors whitespace-nowrap'

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  icon,
}: BaseProps & { to: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
        {children}
        {icon}
      </Link>
    </motion.div>
  )
}

export function ExternalButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  icon,
}: BaseProps & { href: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
        {icon}
      </a>
    </motion.div>
  )
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  icon,
  onClick,
  type = 'button',
}: BaseProps & { onClick?: () => void; type?: 'button' | 'submit' }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </motion.button>
  )
}
