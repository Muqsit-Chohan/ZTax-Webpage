import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleCheckBig,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import { Button, ButtonLink } from '../components/ui/Button'
import { AppleIcon, PlayIcon } from '../components/ui/BrandIcons'
import { ADD_ONS_META, IMAGES } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services() {
  const { t, dir } = useLanguage()
  const [addOnIndex, setAddOnIndex] = useState(0)
  const visibleAddOns = 4
  const addOns = t.services.addOns.items.map((item, i) => ({ ...item, ...ADD_ONS_META[i] }))
  const maxIndex = Math.max(0, addOns.length - visibleAddOns)
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <main>
      {/* Hero + Pricing */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:px-12 md:py-28">
        <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1.5 backdrop-blur-md">
          <CircleCheckBig className="h-4 w-4 text-brand" />
          <span className="text-xs font-bold uppercase tracking-wider text-brand">{t.services.badge}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold text-brand md:text-6xl">
            {t.services.heading} <span className="text-brand-700">{t.services.headingHighlight}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-ink-muted">{t.services.subheading}</p>
        </Reveal>

        <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Standard */}
          <Reveal className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_10px_30px_-10px_rgba(6,45,31,0.08)] transition-transform duration-300 hover:-translate-y-1 md:p-10">
            <div className="mb-8 text-left">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink-muted">
                {t.services.standard.label}
              </span>
              <h3 className="mb-4 text-2xl font-bold text-brand">{t.services.standard.title}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-brand">
                  {t.faq.pricingOption.selfServicePrice}
                </span>
              </div>
            </div>
            <div className="flex-grow text-left">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-muted">
                {t.services.standard.includes}
              </p>
              <ul className="mb-8 space-y-4">
                {t.services.standard.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CircleCheckBig className="h-5 w-5 flex-shrink-0 text-brand-700" />
                    <span className="text-ink">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="outline" className="mt-auto w-full bg-brand-light/40 py-3.5">
              {t.services.standard.cta}
            </Button>
          </Reveal>

          {/* Recommended */}
          <Reveal
            delay={0.12}
            className="relative z-10 flex h-full transform flex-col rounded-2xl bg-brand p-8 text-white shadow-xl md:scale-105 md:p-10"
          >
            <div className="absolute -top-4 right-8 rounded-full bg-brand-700 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              {t.services.pro.badge}
            </div>
            <div className="mb-8 border-b border-white/20 pb-8 text-left">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">
                {t.services.pro.label}
              </span>
              <h3 className="mb-4 text-2xl font-bold">{t.services.pro.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-extrabold tracking-tight">{t.faq.pricingOption.livePrepPrice}</span>
                <span className="text-sm text-white/70">{t.services.pro.perReturn}</span>
              </div>
            </div>
            <div className="flex-grow text-left">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/70">
                {t.services.pro.includes}
              </p>
              <ul className="mb-8 space-y-4">
                {t.services.pro.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CircleCheckBig className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="font-medium text-white">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="inverse" className="mt-auto flex w-full items-center justify-center gap-2 py-3.5">
              {t.services.pro.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Add-on services */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mb-10 flex flex-col items-end justify-between md:flex-row">
          <Reveal className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-brand">{t.services.addOns.heading}</h2>
            <p className="text-ink-muted">{t.services.addOns.subheading}</p>
          </Reveal>
          <div className="mt-6 hidden gap-3 md:mt-0 md:flex">
            <button
              aria-label="Previous"
              disabled={addOnIndex === 0}
              onClick={() => setAddOnIndex((i) => Math.max(0, i - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-ink transition-colors hover:bg-brand-light/40 disabled:opacity-30"
            >
              <PrevIcon className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              disabled={addOnIndex >= maxIndex}
              onClick={() => setAddOnIndex((i) => Math.min(maxIndex, i + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-ink transition-colors hover:bg-brand-light/40 disabled:opacity-30"
            >
              <NextIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((addOn, i) => (
            <Reveal
              key={addOn.title}
              delay={i * 0.08}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-10px_rgba(6,45,31,0.08)] transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                <img
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    addOn.comingSoon ? 'opacity-80 grayscale' : ''
                  }`}
                  src={addOn.image}
                  alt={addOn.title}
                  loading="lazy"
                />
              </div>
              <div className="relative p-6">
                {addOn.comingSoon && (
                  <div className="absolute right-6 top-6 rounded bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                    {t.services.addOns.comingSoon}
                  </div>
                )}
                <h4 className={`mb-2 text-lg font-bold text-brand ${addOn.comingSoon ? 'pr-16' : ''}`}>
                  {addOn.title}
                </h4>
                <div className={`mb-3 text-xl font-bold ${addOn.comingSoon ? 'text-ink-muted opacity-60' : 'text-brand'}`}>
                  {addOn.price}
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{addOn.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 h-[500px] overflow-hidden rounded-3xl shadow-lg lg:order-1">
            <img
              className="h-full w-full object-cover"
              src={IMAGES.serviceHandshake}
              alt="Two professionals shaking hands after a successful tax filing agreement"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
              <h4 className="mb-4 text-lg font-bold text-brand">{t.services.value.promiseTitle}</h4>
              <ul className="space-y-3">
                {t.services.value.promiseItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink">
                    <Check className="h-4 w-4 text-brand-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-light/50 px-3 py-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">{t.services.value.badge}</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-brand md:text-5xl">
              {t.services.value.heading}
            </h2>
            <p className="mb-8 leading-relaxed text-ink-muted">
              {t.services.value.body} <strong className="text-brand">{t.services.value.bodyBold}</strong>
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink to="/faq" icon={<ArrowUpRight className="h-4 w-4" />}>
                {t.services.value.cta1}
              </ButtonLink>
              <Button variant="outline" className="border-2">
                {t.services.value.cta2}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* App download CTA */}
      <section className="mx-auto mb-12 max-w-7xl px-6 py-12 md:px-12">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand p-10 text-center shadow-xl md:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative z-10">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t.services.download.heading}</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">{t.services.download.subheading}</p>
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {t.services.download.features.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex w-full items-center gap-3 rounded-xl bg-white px-6 py-3 font-medium text-brand shadow-sm transition-colors hover:bg-gray-50 sm:w-auto">
                <AppleIcon className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-ink-muted">{t.services.download.downloadOnThe}</div>
                  <div className="text-sm font-bold leading-tight">{t.services.download.appStore}</div>
                </div>
              </button>
              <button className="flex w-full items-center gap-3 rounded-xl bg-white px-6 py-3 font-medium text-brand shadow-sm transition-colors hover:bg-gray-50 sm:w-auto">
                <PlayIcon className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-ink-muted">{t.services.download.getItOn}</div>
                  <div className="text-sm font-bold leading-tight">{t.services.download.googlePlay}</div>
                </div>
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
