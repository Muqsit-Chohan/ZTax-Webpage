import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Search } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import { Button, ButtonLink } from '../components/ui/Button'
import { useLanguage } from '../i18n/LanguageContext'

type CategoryKey = 'all' | 'general' | 'filing' | 'pricing'

export default function FAQ() {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryKey>('all')

  const categoryTabs: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: t.faq.categories.all },
    { key: 'general', label: t.faq.categories.general },
    { key: 'filing', label: t.faq.categories.filing },
    { key: 'pricing', label: t.faq.categories.pricing },
  ]

  const filtered = useMemo(() => {
    return t.faq.items.filter((faq) => {
      const matchesCategory = category === 'all' || faq.category === category
      const matchesQuery =
        query.trim().length === 0 ||
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.body.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category, t])

  return (
    <main className="pb-16 pt-8 md:pb-28">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-12 text-center md:px-12 md:pt-20">
        <Reveal>
          <span className="mb-6 inline-block rounded-full bg-brand-light/60 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand">
            {t.faq.badge}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-brand md:text-6xl">
            {t.faq.headingLead} <span className="text-brand-700">{t.faq.headingHighlight}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-ink-muted">{t.faq.subheading}</p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mb-12 max-w-2xl">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-2 shadow-sm transition-all focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
            <Search className="ml-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full border-none bg-transparent px-4 py-2 text-ink placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {categoryTabs.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  category === cat.key
                    ? 'bg-brand text-white'
                    : 'border border-gray-200 bg-white text-ink-muted hover:bg-brand-light/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-brand-700">{faq.question}</h3>
                {faq.id === 'pricing' ? (
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                        {t.faq.pricingOption.selfServiceLabel}
                      </p>
                      <p className="text-2xl font-bold text-brand">{t.faq.pricingOption.selfServicePrice}</p>
                      <p className="mt-1 text-sm text-ink-muted">{t.faq.pricingOption.selfServiceBody}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                        {t.faq.pricingOption.livePrepLabel}
                      </p>
                      <p className="text-2xl font-bold text-brand">{t.faq.pricingOption.livePrepPrice}</p>
                      <p className="mt-1 text-sm text-ink-muted">{t.faq.pricingOption.livePrepBody}</p>
                    </div>
                  </div>
                ) : faq.id === 'who-can-use' ? (
                  <ul className="space-y-1.5 text-ink-muted">
                    {t.faq.whoCanUse.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-brand-700" />
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-ink-muted">{faq.body}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <Reveal className="py-16 text-center text-ink-muted">
            {t.faq.noResultsPrefix} &ldquo;{query}&rdquo;. {t.faq.noResultsSuffix}
          </Reveal>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-28 md:px-12">
        <Reveal className="relative overflow-hidden rounded-2xl bg-brand-light p-10 text-center md:p-16">
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-brand md:text-4xl">{t.faq.cta.heading}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-brand/80">{t.faq.cta.body}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink to="/services" icon={<ArrowRight className="h-4 w-4" />}>
                {t.faq.cta.primary}
              </ButtonLink>
              <Button variant="outline" className="border border-brand bg-transparent">
                {t.faq.cta.secondary}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
