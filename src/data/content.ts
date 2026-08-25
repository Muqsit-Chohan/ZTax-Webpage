// Language-independent data: images and prices. All copy lives in src/i18n/translations.ts.
//
// Images are bundled locally (src/assets/images) rather than pointed at Google's
// temporary AI-Studio preview URLs — those links are not guaranteed to stay reachable
// (they broke once already after a network blip), so self-hosting is what makes the
// site reliably show images offline-of-Google and in production.

import heroPersonImg from '../assets/images/hero-person.jpg'
import aboutHeroImg from '../assets/images/about-hero.jpg'
import serviceDocsImg from '../assets/images/service-docs.jpg'
import serviceAdvisorImg from '../assets/images/service-advisor.jpg'
import serviceOwnerImg from '../assets/images/service-owner.jpg'
import serviceRefundImg from '../assets/images/service-refund.jpg'
import serviceHandshakeImg from '../assets/images/service-handshake.jpg'
import dashboardImg from '../assets/images/dashboard.jpg'

export const IMAGES = {
  heroPerson: heroPersonImg,
  aboutHero: aboutHeroImg,
  serviceDocs: serviceDocsImg,
  serviceAdvisor: serviceAdvisorImg,
  serviceOwner: serviceOwnerImg,
  serviceRefund: serviceRefundImg,
  serviceHandshake: serviceHandshakeImg,
  dashboard: dashboardImg,
}

// Aligned by index with translations.<lang>.services.addOns.items
export const ADD_ONS_META = [
  { price: '$14.99', image: IMAGES.serviceDocs, comingSoon: false },
  { price: '$39.99', image: IMAGES.serviceAdvisor, comingSoon: false },
  { price: '$39.99', image: IMAGES.serviceOwner, comingSoon: false },
  { price: '--', image: IMAGES.serviceRefund, comingSoon: true },
]

export const EXTERNAL_LINKS = {
  startReturn: 'https://ztaxapp.vercel.app/login',
}
