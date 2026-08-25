import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import { useLanguage } from '../../i18n/LanguageContext'
import { AppleIcon, PlayIcon } from '../ui/BrandIcons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const NAV_LINKS = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.services, to: '/services' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.faq, to: '/faq' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-brand-light/85 shadow-sm backdrop-blur-md' : 'bg-brand-light/40 backdrop-blur-sm'
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="group flex items-center gap-2 text-xl font-bold text-brand">
          <img
            src={logo}
            alt="ZTax App"
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12"
          />
          ZTax App
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 text-ink-muted transition-colors hover:text-brand ${
                  isActive ? 'text-brand' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-brand"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href="mailto:support@ztaxapp.com"
            className="relative pb-1 text-ink-muted transition-colors hover:text-brand"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#"
            aria-label={t.header.appStoreAria}
            className="hidden text-brand transition-colors hover:text-brand-700 sm:inline-flex"
          >
            <AppleIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label={t.header.googlePlayAria}
            className="hidden text-brand transition-colors hover:text-brand-700 sm:inline-flex"
          >
            <PlayIcon className="h-5 w-5" />
          </a>
          <Link
            to="/services"
            className="hidden rounded-lg bg-brand px-5 py-2 font-medium text-white transition-colors hover:bg-brand-950 sm:inline-flex"
          >
            {t.common.fileNow}
          </Link>
          <button
            aria-label="Toggle menu"
            className="text-brand md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-brand/10 bg-brand-light/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 font-medium transition-colors ${
                      isActive ? 'bg-brand/10 text-brand' : 'text-ink-muted hover:bg-white/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="mailto:support@ztaxapp.com"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-medium text-ink-muted transition-colors hover:bg-white/50"
              >
                {t.nav.contact}
              </a>

              <div className="mt-2 flex items-center gap-4 px-3">
                <a href="#" aria-label={t.header.appStoreAria} className="text-brand">
                  <AppleIcon className="h-5 w-5" />
                </a>
                <a href="#" aria-label={t.header.googlePlayAria} className="text-brand">
                  <PlayIcon className="h-5 w-5" />
                </a>
              </div>

              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-brand px-5 py-2.5 text-center font-medium text-white"
              >
                {t.common.fileNow}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
