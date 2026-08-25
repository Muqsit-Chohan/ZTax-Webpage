import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Award, Clock, Layers, ShieldCheck, Sparkles, Star, TrendingUp, ArrowRight as ArrowRightIcon } from 'lucide-react'
import ShaderBackground from '../components/ui/ShaderBackground'
import Reveal from '../components/ui/Reveal'
import { ButtonLink, ExternalButtonLink } from '../components/ui/Button'
import { AppleIcon, PlayIcon } from '../components/ui/BrandIcons'
import { IMAGES, EXTERNAL_LINKS } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

const TRUST_ICONS = [Award, ShieldCheck, TrendingUp, Clock]
const LANGS: Lang[] = ['en', 'es', 'ar']

export default function Home() {
  const reduceMotion = useReducedMotion()
  const { t, lang, setLang } = useLanguage()
  const [activeHowStep, setActiveHowStep] = useState(3)

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <ShaderBackground />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-28">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              {LANGS.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    lang === code
                      ? 'bg-white text-brand'
                      : 'bg-transparent text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {code !== 'en' && <span className="text-xs font-bold">{code === 'es' ? 'A' : 'ع'}</span>}
                  {t.common.languageNames[code]}
                </button>
              ))}
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                {t.home.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-lg text-lg leading-relaxed text-white/90"
              >
                {t.home.hero.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center gap-4 sm:flex-row"
            >
              <ExternalButtonLink
                href={EXTERNAL_LINKS.startReturn}
                variant="inverse"
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                {t.home.hero.startReturn}
              </ExternalButtonLink>
              <ButtonLink to="/about" variant="ghost">
                {t.home.hero.workWithPro}
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex items-center">
                <span className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-brand text-xs font-bold text-white">
                  4.8
                </span>
                <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-brand-500 text-white">
                  <Star className="h-4 w-4" fill="currentColor" />
                </span>
              </div>
              <p className="text-sm text-white/80">
                {t.home.hero.trustedByPrefix}{' '}
                <span className="font-bold text-white">{t.home.hero.trustedByCount}</span>{' '}
                {t.home.hero.trustedBySuffix}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="absolute inset-0 -z-10 scale-105 rotate-3 transform rounded-3xl bg-white/20 backdrop-blur-sm" />
            <img
              alt="Smiling person holding phone with the ZTax app open"
              className="h-auto w-full rounded-3xl border-4 border-white/50 object-cover shadow-2xl"
              src={IMAGES.heroPerson}
              loading="eager"
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 left-6 flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-ink-muted">{t.home.hero.security}</p>
                <p className="text-sm font-bold text-brand">{t.home.hero.encryption}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="border-y border-white/30 bg-brand-light/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-sm font-medium text-brand md:justify-between md:px-12">
          {t.home.trustBanner.map((item, i) => {
            const Icon = TRUST_ICONS[i]
            return (
              <Reveal key={item} delay={i * 0.06} className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {item}
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <Reveal className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold text-brand md:text-4xl">{t.home.value.heading}</h2>
          <p className="text-lg text-ink-muted">{t.home.value.subheading}</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="group relative overflow-hidden rounded-3xl bg-white p-8 md:col-span-2">
            <div className="relative z-10 mb-12 flex items-start justify-between">
              <h3 className="text-2xl font-bold text-brand">{t.home.value.simpleTitle}</h3>
              <a className="flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-brand" href="#">
                {t.home.value.learnMore}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-8">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light">
                  <Layers className="h-6 w-6 text-brand" />
                </div>
                <p className="mb-1 text-sm text-ink-muted">{t.home.value.simpleStatLabel}</p>
                <p className="text-4xl font-bold text-brand">{t.home.value.simpleStatValue}</p>
              </div>
              <div className="flex translate-x-4 translate-y-8 transform flex-col items-center justify-center rounded-br-3xl rounded-tl-3xl bg-brand p-6 text-center opacity-90 transition-opacity group-hover:opacity-100">
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-white/70">{t.home.value.valuesLabel}</span>
                <p className="font-medium text-white">{t.home.value.valuesLead} <span className="font-bold">{t.home.value.valuesBold}</span></p>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Sparkles className="h-6 w-6 text-brand" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-between rounded-3xl bg-white p-8">
            <h3 className="mb-12 text-2xl font-bold text-brand">{t.home.value.secureTitle}</h3>
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light"><ShieldCheck className="h-6 w-6 text-brand" /></div>
              <p className="mb-1 text-sm text-ink-muted">{t.home.value.secureStatLabel}</p>
              <p className="text-4xl font-bold text-brand">{t.home.value.secureStatValue}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8">
            <h3 className="relative z-10 mb-12 text-2xl font-bold text-brand">{t.home.value.supportTitle}</h3>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light"><Clock className="h-6 w-6 text-brand" /></div>
              <p className="mb-1 text-sm text-ink-muted">{t.home.value.supportStatLabel}</p>
              <p className="text-3xl font-bold text-brand">{t.home.value.supportStatValue}</p>
            </div>
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gray-100 opacity-50" />
            <div className="absolute bottom-4 right-0 h-12 w-24 rounded-l-full bg-blue-100/50" />
          </Reveal>

          <Reveal delay={0.16} className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand p-8 text-white md:col-span-2">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand to-brand-800" />
            <div className="relative z-10 max-w-md">
              <h3 className="mb-4 text-2xl font-bold">{t.home.value.deliverTitle}</h3>
              <p className="mb-8 leading-relaxed text-white/80">{t.home.value.deliverBody}</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"><ShieldCheck className="h-4 w-4 text-accent" />{t.home.value.deliverBadge}</div>
            </div>
            <div className="absolute bottom-6 end-6 top-6 hidden w-1/3 flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:flex"><p className="text-sm italic text-white/70">{t.home.value.deliverQuote}</p></div>
          </Reveal>
        </div>
      </section>

      <div className="flex flex-col">
      {/* Values */}
      <section className="order-2 border-t border-brand/10 bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 space-y-5 text-center">
            <span className="inline-flex rounded-full border border-gray-200 px-7 py-3 text-sm font-semibold text-brand">
              {lang === 'ar' ? 'قيمنا' : t.home.value.valuesLabel}
            </span>
            <h2 className="text-4xl font-normal tracking-tight text-black md:text-6xl">
              {lang === 'ar' ? 'نحن نبسط، نأمن الدعم، ونسلم' : 'We Simplify, Secure, Support and Deliver'}
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: lang === 'ar' ? 'مبسط' : 'Simple',
                body:
                  lang === 'ar'
                    ? 'ونحن نبسط الخطوات حتى تتمكن من اعداد اقرارك الضريبي بشكل سهل وامن'
                    : 'We keep the filing process clear and easy at every step.',
              },
              {
                title: lang === 'ar' ? 'آمن' : 'Secure',
                body:
                  lang === 'ar'
                    ? 'ان بياناتك الشخصية والمالية تخضع لمعايير الحماية الخاصة بمصلحة الضرائب الأمريكية ولن يتم مشاركتها'
                    : 'Your personal and financial data is protected throughout the filing process.',
              },
              {
                title: lang === 'ar' ? 'الدعم' : 'Support',
                body:
                  lang === 'ar'
                    ? 'لدينا فريق دعم موثوق للمساعدة في اي خطوة من خطوات اعداد اقرارك الضريبي'
                    : 'Our trusted team is available to guide you at every step.',
              },
              {
                title: lang === 'ar' ? 'السعر في متناول الجميع' : 'Affordable',
                body:
                  lang === 'ar'
                    ? 'تطبيق زي تاكس يقدم الخبرات العملية والتكنولوجية وحلول ضريبية بأفضل الاسعار التي تناسب ميزانية الجميع'
                    : 'Reliable tax solutions at a price that fits your budget.',
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="flex min-h-[300px] flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl font-semibold text-accent">
                  {index + 1}
                </div>
                <div className="mt-auto rounded-2xl bg-[#f5f4f1] p-6 text-end">
                  <h3 className="mb-4 text-2xl font-semibold text-brand">{item.title}</h3>
                  <p className="text-base leading-relaxed text-gray-700">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="order-1 border-t border-brand/10 bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 flex flex-col items-start gap-5 lg:items-end lg:text-end">
            <span className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-brand">
              {t.home.how.label}
            </span>
            <h2 className="text-5xl font-normal tracking-tight text-black md:text-7xl">{t.home.how.heading}</h2>
          </Reveal>

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="flex items-center justify-center gap-4 border-b border-gray-200 pb-3 text-sm font-medium sm:gap-8">
                {t.home.how.steps.map((step, i) => (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveHowStep(i)}
                    className={`relative whitespace-nowrap pb-3 text-gray-500 transition-colors hover:text-brand ${
                      activeHowStep === i ? 'text-brand' : ''
                    }`}
                  >
                    {lang === 'ar' ? `الخطوة ${i + 1}` : `${t.home.how.stepLabel} ${i + 1}`}
                    {activeHowStep === i && <span className="absolute inset-x-0 -bottom-3 h-px bg-brand" />}
                  </button>
                ))}
              </div>
              <motion.div
                key={`${lang}-${activeHowStep}`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2 py-10 text-center sm:px-8"
              >
                <h3 className="mb-5 text-3xl font-normal text-black md:text-4xl">
                  {t.home.how.steps[activeHowStep].title}
                </h3>
                <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink-muted">
                  {t.home.how.steps[activeHowStep].body}
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.12} className="order-1 flex flex-wrap items-center justify-center gap-5 lg:order-2 lg:justify-start">
              <ButtonLink to="/services" variant="outline" className="px-8 py-4">
                {t.home.how.learnMore}
              </ButtonLink>
              <ExternalButtonLink href={EXTERNAL_LINKS.startReturn} className="px-10 py-5">
                {t.home.how.cta}
              </ExternalButtonLink>
              <ButtonLink to="/services" className="h-16 w-16 !p-0" icon={<ArrowRightIcon className="h-6 w-6" />}>
                <span className="sr-only">{t.home.how.learnMore}</span>
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>
      </div>

      {/* App download */}
      <section className="bg-white/50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-12">
          <Reveal className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-brand md:text-5xl">{t.home.download.heading}</h2>
              <p className="text-lg text-ink-muted">{t.home.download.subheading}</p>
            </div>

            <div className="space-y-3">
              {t.home.download.features.map((label, i) => (
                <div
                  key={label}
                  className={`rounded-full px-6 py-3 text-center text-sm font-medium text-white ${
                    ['bg-brand', 'bg-brand-800', 'bg-brand-700'][i]
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                className="flex items-center justify-center gap-3 rounded-xl bg-brand px-6 py-3 text-white transition-colors hover:bg-brand-950"
                href="#"
              >
                <AppleIcon className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-[10px] leading-tight text-white/80">{t.home.download.downloadOnThe}</p>
                  <p className="text-sm font-bold leading-tight">{t.home.download.appStore}</p>
                </div>
              </a>
              <a
                className="flex items-center justify-center gap-3 rounded-xl bg-brand px-6 py-3 text-white transition-colors hover:bg-brand-950"
                href="#"
              >
                <PlayIcon className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-[10px] leading-tight text-white/80">{t.home.download.getItOn}</p>
                  <p className="text-sm font-bold leading-tight">{t.home.download.googlePlay}</p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative flex justify-center">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 h-[500px] w-64 rounded-[3rem] border-8 border-gray-100 bg-white p-2 shadow-2xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-white">
                <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-gray-100" />
                <img
                  src={IMAGES.dashboard}
                  alt="ZTax App dashboard showing tax return progress and pending actions"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </motion.div>
            <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200 opacity-50 blur-3xl" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
