import { useState } from 'react'
import { ChevronUp, Languages } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Lang } from '../../i18n/translations'

const LANGS: Lang[] = ['en', 'es', 'ar']

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 end-5 z-50">
      {open && (
        <div className="mb-2 min-w-40 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLang(code)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${
                lang === code ? 'bg-brand text-white' : 'text-brand hover:bg-brand-light'
              }`}
            >
              <span>{t.common.languageNames[code]}</span>
              {lang === code && <span aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label="Select language"
        className="flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-3 text-sm font-semibold text-brand shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <Languages className="h-4 w-4" />
        <span>{t.common.languageNames[lang]}</span>
        <ChevronUp className={`h-4 w-4 transition-transform ${open ? '' : 'rotate-180'}`} />
      </button>
    </div>
  )
}
