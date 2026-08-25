import { ArrowRight, BadgeCheck, Flag, ShieldCheck, Tags, TrendingUp, Headphones } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Badge from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { IMAGES } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

const WHY_ICONS = [BadgeCheck, ShieldCheck, Headphones, Tags]

export default function About() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 md:py-20">
      {/* Hero */}
      <Reveal className="mb-20 flex max-w-3xl flex-col items-center text-center">
        <Badge className="mb-6">{t.about.badge}</Badge>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-brand md:text-5xl">
          {t.about.titleLead} <span className="opacity-80">{t.about.titleHighlight}</span>
          <br />
          {t.about.titleTail}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg">{t.about.intro}</p>
      </Reveal>

      {/* Mission / Image / Vision */}
      <div className="mb-32 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        <Reveal className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-brand to-brand-800 p-8 text-white">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t.about.mission.title}</h2>
            <p className="mb-8 text-sm leading-relaxed opacity-90">{t.about.mission.body}</p>
          </div>
          <Button
            variant="inverse"
            className="w-max px-5 py-3 text-sm"
            icon={
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                <ArrowRight className="h-3 w-3" />
              </span>
            }
          >
            {t.about.mission.cta}
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="h-full min-h-[300px] overflow-hidden rounded-3xl">
          <img
            alt="Professional using a phone to manage tax filing"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            src={IMAGES.aboutHero}
          />
        </Reveal>

        <Reveal
          delay={0.2}
          className="flex h-full flex-col rounded-3xl bg-gradient-to-br from-brand to-brand-800 p-8 text-white"
        >
          <h2 className="mb-4 text-2xl font-bold">{t.about.vision.title}</h2>
          <p className="text-sm leading-relaxed opacity-90">{t.about.vision.body}</p>
        </Reveal>
      </div>

      {/* Journey */}
      <div className="mb-32 flex w-full flex-col items-center text-center">
        <Badge className="mb-6">{t.about.journey.badge}</Badge>
        <h2 className="mb-6 text-3xl font-bold text-brand">
          {t.about.journey.headingLead} <span className="opacity-80">{t.about.journey.headingHighlight}</span>
        </h2>
        <p className="mb-12 max-w-3xl text-sm leading-relaxed text-ink/80 md:text-base">{t.about.journey.body}</p>
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 text-left md:grid-cols-2">
          <Reveal className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
              <Flag className="h-4 w-4" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-brand">{t.about.journey.beginningTitle}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{t.about.journey.beginningBody}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-brand">
              <TrendingUp className="h-4 w-4" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-brand">{t.about.journey.growthTitle}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{t.about.journey.growthBody}</p>
          </Reveal>
        </div>
      </div>

      {/* Why choose */}
      <div className="flex w-full flex-col items-center text-center">
        <Reveal>
          <h2 className="mb-12 text-3xl font-bold text-brand">{t.about.why.heading}</h2>
        </Reveal>
        <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {t.about.why.items.map((item, i) => {
            const Icon = WHY_ICONS[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
                  <Icon className="h-3.5 w-3.5 text-brand" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-brand">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{item.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </main>
  )
}
