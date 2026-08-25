import { Link } from 'react-router-dom'
import { Mail, ShieldCheck } from 'lucide-react'
import logo from '../../assets/logo-light.png'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-brand-800 bg-brand pb-8 pt-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-12">
        <div className="space-y-4 md:col-span-5">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-accent">
            <img src={logo} alt="ZTax App" className="h-7 w-7 object-contain" />
            ZTax App
          </Link>
          <p className="max-w-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
          <div className="flex items-center gap-2 pt-2 text-sm text-white/60">
            <ShieldCheck className="h-4 w-4 text-accent" />
            {t.footer.encryption}
          </div>
          <p className="pt-4 text-xs text-white/50">
            © {year} ZTax App. {t.footer.rights}
          </p>
        </div>

        <div className="hidden md:col-span-1 md:block" />

        <div className="md:col-span-3">
          <h4 className="mb-4 font-bold">{t.footer.company}</h4>
          <ul className="space-y-3">
            <li>
              <Link className="text-sm text-white/70 transition-colors hover:text-white" to="/about">
                {t.footer.aboutUs}
              </Link>
            </li>
            <li>
              <Link className="text-sm text-white/70 transition-colors hover:text-white" to="/services">
                {t.footer.services}
              </Link>
            </li>
            <li>
              <Link className="text-sm text-white/70 transition-colors hover:text-white" to="/faq">
                {t.footer.faqSupport}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 font-bold">{t.footer.legal}</h4>
          <ul className="space-y-3">
            <li>
              <a
                className="text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-dim"
                href="#"
              >
                {t.footer.privacy}
              </a>
            </li>
            <li>
              <a className="text-sm text-white/70 transition-colors hover:text-white" href="#">
                {t.footer.terms}
              </a>
            </li>
            <li>
              <a className="text-sm text-white/70 transition-colors hover:text-white" href="#">
                {t.footer.security}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                href="mailto:support@ztaxapp.com"
              >
                <Mail className="h-3.5 w-3.5" />
                {t.footer.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
