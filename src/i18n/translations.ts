export type Lang = 'en' | 'es' | 'ar'

export interface Translations {
  common: {
    languageNames: Record<Lang, string>
    fileNow: string
  }
  nav: {
    home: string
    services: string
    about: string
    faq: string
    contact: string
  }
  header: {
    appStoreAria: string
    googlePlayAria: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      startReturn: string
      workWithPro: string
      trustedByPrefix: string
      trustedByCount: string
      trustedBySuffix: string
      security: string
      encryption: string
    }
    trustBanner: string[]
    value: {
      heading: string
      subheading: string
      simpleTitle: string
      learnMore: string
      simpleStatLabel: string
      simpleStatValue: string
      valuesLabel: string
      valuesLead: string
      valuesBold: string
      secureTitle: string
      secureStatLabel: string
      secureStatValue: string
      supportTitle: string
      supportStatLabel: string
      supportStatValue: string
      deliverTitle: string
      deliverBody: string
      deliverBadge: string
      deliverQuote: string
    }
    how: {
      label: string
      heading: string
      stepLabel: string
      steps: { title: string; body: string }[]
      learnMore: string
      cta: string
    }
    download: {
      heading: string
      subheading: string
      features: string[]
      downloadOnThe: string
      appStore: string
      getItOn: string
      googlePlay: string
    }
  }
  about: {
    badge: string
    titleLead: string
    titleHighlight: string
    titleTail: string
    intro: string
    mission: { title: string; body: string; cta: string }
    vision: { title: string; body: string }
    journey: {
      badge: string
      headingLead: string
      headingHighlight: string
      body: string
      beginningTitle: string
      beginningBody: string
      growthTitle: string
      growthBody: string
    }
    why: {
      heading: string
      items: { title: string; body: string }[]
    }
  }
  services: {
    badge: string
    heading: string
    headingHighlight: string
    subheading: string
    standard: { label: string; title: string; includes: string; features: string[]; cta: string }
    pro: {
      badge: string
      label: string
      title: string
      perReturn: string
      includes: string
      features: string[]
      cta: string
    }
    addOns: {
      heading: string
      subheading: string
      items: { title: string; body: string }[]
      comingSoon: string
    }
    value: {
      badge: string
      heading: string
      body: string
      bodyBold: string
      promiseTitle: string
      promiseItems: string[]
      cta1: string
      cta2: string
    }
    download: {
      heading: string
      subheading: string
      features: string[]
      appStore: string
      googlePlay: string
      downloadOnThe: string
      getItOn: string
    }
  }
  faq: {
    badge: string
    headingLead: string
    headingHighlight: string
    subheading: string
    searchPlaceholder: string
    categories: { all: string; general: string; filing: string; pricing: string }
    items: { id: string; question: string; category: 'general' | 'filing' | 'pricing'; body: string }[]
    pricingOption: {
      selfServiceLabel: string
      selfServicePrice: string
      selfServiceBody: string
      livePrepLabel: string
      livePrepPrice: string
      livePrepBody: string
    }
    whoCanUse: string[]
    noResultsPrefix: string
    noResultsSuffix: string
    cta: { heading: string; body: string; primary: string; secondary: string }
  }
  footer: {
    tagline: string
    encryption: string
    rights: string
    company: string
    aboutUs: string
    services: string
    faqSupport: string
    legal: string
    privacy: string
    terms: string
    security: string
    contact: string
  }
}

export const translations: Record<Lang, Translations> = {
  en: {
    common: {
      languageNames: { en: 'English', es: 'Español', ar: 'العربية' },
      fileNow: 'File Now',
    },
    nav: { home: 'Home', services: 'Services', about: 'About Us', faq: 'FAQ', contact: 'Contact' },
    header: { appStoreAria: 'Download on the App Store', googlePlayAria: 'Get it on Google Play' },
    home: {
      hero: {
        title: 'File Your Federal & State Taxes Online',
        subtitle:
          'Prepare and file your Federal and State tax returns from anywhere using your phone, tablet, or computer. Fast, secure, and built for modern professionals.',
        startReturn: 'Start My Return',
        workWithPro: 'Work With a Tax Pro',
        trustedByPrefix: 'Trusted by over',
        trustedByCount: '100,000+',
        trustedBySuffix: 'users.',
        security: 'Security',
        encryption: 'Bank-Level Encryption',
      },
      trustBanner: [
        'Years of Professional Expertise',
        'Secure & Encrypted',
        'Affordable Pricing',
        '24/7 Support',
      ],
      value: {
        heading: 'Filing made simple, secure, and stress-free.',
        subheading:
          'Everything you need to file with confidence, whether you are a W-2 employee, freelancer, or business owner.',
        simpleTitle: 'Simple',
        learnMore: 'Learn more',
        simpleStatLabel: 'Years of professional tax expertise',
        simpleStatValue: '10+',
        valuesLabel: 'Our Values',
        valuesLead: 'We Simplify,',
        valuesBold: 'Secure, Support',
        secureTitle: 'Secure',
        secureStatLabel: 'Data protection & encryption',
        secureStatValue: '100%',
        supportTitle: 'Support',
        supportStatLabel: 'Live chat with tax pros',
        supportStatValue: '24/7 Access',
        deliverTitle: 'Deliver',
        deliverBody:
          'Get your maximum refund guaranteed. We double-check every detail before you file.',
        deliverBadge: 'Accuracy Guarantee',
        deliverQuote:
          '"We combine years of professional tax knowledge with modern technology to deliver reliable filing solutions at a price that fits your budget."',
      },
      how: {
        label: 'How it Works',
        heading: 'Simple steps to file your taxes.',
        stepLabel: 'Step',
        steps: [
          { title: '1. Create Your Account', body: 'Set up your secure account in just a few minutes.' },
          {
            title: '2. Upload Documents',
            body: 'Upload your W-2s, 1099s, and other tax documents securely.',
          },
          {
            title: '3. Answer Questions',
            body: 'Our guided interview helps identify your tax situation and available deductions.',
          },
          {
            title: '4. Review & File',
            body: 'Electronically file your Federal and State tax returns with confidence.',
          },
        ],
        learnMore: 'Learn more',
        cta: "Let's get started",
      },
      download: {
        heading: 'Download ZTax App Today',
        subheading:
          'File your taxes anytime, anywhere. Take a picture of your W-2 and let our smart platform do the rest.',
        features: ['FEDERAL & STATE FILING', 'ENGLISH, SPANISH & ARABIC', 'SELF-SERVICE OR LIVE TAX PREPARATION'],
        downloadOnThe: 'Download on the',
        appStore: 'App Store',
        getItOn: 'Get it on',
        googlePlay: 'Google Play',
      },
    },
    about: {
      badge: 'About Us',
      titleLead: 'Empowering',
      titleHighlight: 'Taxpayers',
      titleTail: 'Everywhere',
      intro:
        'At ZTax App, our mission is to simplify tax filing for freelancers, families, and small business owners. With affordability, multilingual support, and industry-standard security, we help taxpayers across the U.S. file with confidence and peace of mind.',
      mission: {
        title: 'Our Mission',
        body: 'Our purpose is to empower taxpayers to dream bigger, move faster, and build better financial futures. At ZTax App, we combine professional expertise with modern technology to make tax filing simple, secure, and accessible for everyone.',
        cta: 'Get Started Today',
      },
      vision: {
        title: 'Our Vision',
        body: 'Our vision is to simplify tax filing by combining professional expertise with modern technology, creating a future where financial compliance is effortless and intuitive.',
      },
      journey: {
        badge: 'Vision',
        headingLead: 'Our',
        headingHighlight: 'Journey',
        body: 'The ZTax App journey reflects our mission to simplify tax filing for everyone. From our foundation to future innovation, each milestone highlights our commitment to affordability, multilingual support, and secure solutions that empower taxpayers across the U.S.',
        beginningTitle: 'The Beginning',
        beginningBody:
          'Founded on the belief that everyone deserves access to professional, easy-to-understand tax assistance, regardless of language or income level.',
        growthTitle: 'Growth & Innovation',
        growthBody:
          'Expanding our platform to integrate AI-driven insights and broader state support, continually refining the user experience for seamless filing.',
      },
      why: {
        heading: 'Why Choose ZTax App?',
        items: [
          { title: 'Simple', body: 'Intuitive design that guides you step-by-step through complex forms.' },
          {
            title: 'Secure',
            body: 'Bank-level encryption to ensure your sensitive data remains protected.',
          },
          {
            title: 'Supportive',
            body: 'Multilingual professional assistance available when you need it most.',
          },
          { title: 'Affordable', body: 'Transparent pricing with no hidden fees, maximizing your return.' },
        ],
      },
    },
    services: {
      badge: 'Our Services',
      heading: 'ZTax',
      headingHighlight: 'App Services',
      subheading:
        'Discover tailored tax solutions designed for families, freelancers, and small businesses. ZTax App makes filing simple, secure, and affordable.',
      standard: {
        label: 'Self-Service Tax Filing',
        title: 'Simple Federal & State Return',
        includes: 'Includes:',
        features: [
          'Federal Tax Return',
          'One State Tax Return',
          'Electronic Filing',
          'Refund Tracking',
          'Secure Document Upload',
        ],
        cta: 'Get Started Today',
      },
      pro: {
        badge: 'Recommended',
        label: 'Live Tax Preparation',
        title: 'Service Fee',
        perReturn: 'Per Return',
        includes: 'Includes Everything Plus:',
        features: [
          'Professional Preparation',
          'Federal & State Return',
          'Document Review & Audit Protection',
          '24/7 Tax Expert Support',
          'Multilingual Support (EN, SP, AR)',
        ],
        cta: 'Connect with an Expert',
      },
      addOns: {
        heading: 'Add-On Services',
        subheading:
          'Expand your filing needs with our specialized add-on services designed for unique financial situations.',
        items: [
          {
            title: 'Additional State Return',
            body: 'For taxpayers required to file in more than one state.',
          },
          { title: 'Amendment Filing', body: 'For taxpayers needing to amend a previously filed return.' },
          { title: 'Business Schedule C', body: 'Included in self-service interview for freelancers.' },
          {
            title: 'Refund Advance',
            body: 'Get a portion of your refund early through participating partners.',
          },
        ],
        comingSoon: 'Coming Soon',
      },
      value: {
        badge: 'Why ZTax App?',
        heading: 'Simplify Your Taxes, Securely and Affordably',
        body: "At ZTax App, we help you build confidence and peace of mind in your financial journey. Whether you're a W-2 employee, freelancer, contractor, or LLC owner, our platform makes filing",
        bodyBold: 'Federal and State returns',
        promiseTitle: 'Transparent Pricing Promise',
        promiseItems: ['No hidden fees.', 'No surprise charges.', 'One simple price for Federal & State.'],
        cta1: 'Get Started Today',
        cta2: 'View Comparisons',
      },
      download: {
        heading: 'Download ZTax App Today',
        subheading: 'File your taxes anytime, anywhere. Available on all major platforms.',
        features: ['Federal & State Filing', 'English, Spanish & Arabic', 'Self-Service or Live Prep'],
        appStore: 'App Store',
        googlePlay: 'Google Play',
        downloadOnThe: 'Download on the',
        getItOn: 'GET IT ON',
      },
    },
    faq: {
      badge: 'FAQ',
      headingLead: 'Frequently',
      headingHighlight: 'Asked Questions',
      subheading:
        "Get in touch with our team for quick, professional support. Whether you need guidance on filing, pricing, or multilingual assistance, we're just a message away for all your tax filing questions.",
      searchPlaceholder: 'Search questions...',
      categories: { all: 'All', general: 'General', filing: 'Filing', pricing: 'Pricing' },
      items: [
        {
          id: 'what-is-ztax',
          question: 'What is ZTax App?',
          category: 'general',
          body: 'ZTax App is a multilingual online tax filing platform that allows individuals and eligible business owners to prepare and electronically file Federal and State tax returns quickly, securely, and affordably.',
        },
        {
          id: 'who-can-use',
          question: 'Who can use ZTax App?',
          category: 'general',
          body: 'W-2 Employees, 1099 Contractors & Freelancers, Self-Employed Individuals & Gig Workers, and Single-Member LLC Owners (Schedule C).',
        },
        {
          id: 'pricing',
          question: 'Pricing Options',
          category: 'pricing',
          body: 'Self-Service is $69.99 — includes e-filing, 1 State + Federal return. Live Tax Prep is $150 — a qualified pro prepares and files for you.',
        },
        {
          id: 'languages',
          question: 'Is ZTax App available in multiple languages?',
          category: 'general',
          body: 'Yes. We currently support English, Spanish, and Arabic. Additional languages may be added in the future.',
        },
        {
          id: 'llc',
          question: 'Can I file my LLC taxes?',
          category: 'filing',
          body: 'Yes. Single-Member LLCs that report business activity on Schedule C can file through ZTax App.',
        },
        {
          id: 'hidden-fees',
          question: 'Are there any hidden fees?',
          category: 'pricing',
          body: 'No. Our pricing is transparent. Additional state filing options may be available for multi-state requirements at an extra $14.99 per state.',
        },
      ],
      pricingOption: {
        selfServiceLabel: 'Self-Service',
        selfServicePrice: '$69.99',
        selfServiceBody: 'Includes e-filing, 1 State + Federal return.',
        livePrepLabel: 'Live Tax Prep',
        livePrepPrice: '$150',
        livePrepBody: 'A qualified pro prepares and files for you.',
      },
      whoCanUse: [
        'W-2 Employees',
        '1099 Contractors & Freelancers',
        'Self-Employed Individuals & Gig Workers',
        'Single-Member LLC Owners (Schedule C)',
      ],
      noResultsPrefix: 'No questions match',
      noResultsSuffix: 'Try another search term or category.',
      cta: {
        heading: 'Still have questions?',
        body: "Can't find the answer you're looking for? Our support team is here to help you navigate your tax filing process.",
        primary: 'Connect with an Expert',
        secondary: 'Visit Help Center',
      },
    },
    footer: {
      tagline:
        'Making tax filing simple, secure, and affordable for families, freelancers, and small businesses.',
      encryption: 'Bank-level encryption on every return',
      rights: 'All rights reserved. Your security is our priority.',
      company: 'Company',
      aboutUs: 'About Us',
      services: 'Services',
      faqSupport: 'FAQ & Support',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      security: 'Security',
      contact: 'Contact',
    },
  },

  es: {
    common: {
      languageNames: { en: 'English', es: 'Español', ar: 'العربية' },
      fileNow: 'Declarar Ahora',
    },
    nav: { home: 'Inicio', services: 'Servicios', about: 'Sobre Nosotros', faq: 'Preguntas', contact: 'Contacto' },
    header: { appStoreAria: 'Descargar en App Store', googlePlayAria: 'Disponible en Google Play' },
    home: {
      hero: {
        title: 'Declara tus Impuestos Federales y Estatales en Línea',
        subtitle:
          'Prepara y presenta tus declaraciones de impuestos Federales y Estatales desde cualquier lugar usando tu teléfono, tableta o computadora. Rápido, seguro y diseñado para profesionales modernos.',
        startReturn: 'Iniciar mi Declaración',
        workWithPro: 'Trabajar con un Experto',
        trustedByPrefix: 'Con la confianza de más de',
        trustedByCount: '100,000+',
        trustedBySuffix: 'usuarios.',
        security: 'Seguridad',
        encryption: 'Encriptación de Nivel Bancario',
      },
      trustBanner: [
        'Años de Experiencia Profesional',
        'Seguro y Encriptado',
        'Precios Accesibles',
        'Soporte 24/7',
      ],
      value: {
        heading: 'Declarar impuestos de forma simple, segura y sin estrés.',
        subheading:
          'Todo lo que necesitas para declarar con confianza, ya seas empleado W-2, freelancer o dueño de negocio.',
        simpleTitle: 'Simple',
        learnMore: 'Saber más',
        simpleStatLabel: 'Años de experiencia profesional en impuestos',
        simpleStatValue: '10+',
        valuesLabel: 'Nuestros Valores',
        valuesLead: 'Simplificamos,',
        valuesBold: 'Aseguramos, Apoyamos',
        secureTitle: 'Seguro',
        secureStatLabel: 'Protección y encriptación de datos',
        secureStatValue: '100%',
        supportTitle: 'Soporte',
        supportStatLabel: 'Chat en vivo con expertos fiscales',
        supportStatValue: 'Acceso 24/7',
        deliverTitle: 'Entregamos',
        deliverBody:
          'Obtén tu máximo reembolso garantizado. Revisamos cada detalle dos veces antes de declarar.',
        deliverBadge: 'Garantía de Precisión',
        deliverQuote:
          '"Combinamos años de conocimiento fiscal profesional con tecnología moderna para ofrecer soluciones de declaración confiables a un precio que se ajusta a tu presupuesto."',
      },
      how: {
        label: 'Cómo Funciona',
        heading: 'Pasos simples para declarar tus impuestos.',
        stepLabel: 'Paso',
        steps: [
          { title: '1. Crea tu Cuenta', body: 'Configura tu cuenta segura en solo unos minutos.' },
          {
            title: '2. Sube tus Documentos',
            body: 'Sube tus formularios W-2, 1099 y otros documentos fiscales de forma segura.',
          },
          {
            title: '3. Responde Preguntas',
            body: 'Nuestra entrevista guiada identifica tu situación fiscal y las deducciones disponibles.',
          },
          {
            title: '4. Revisa y Declara',
            body: 'Presenta electrónicamente tus declaraciones Federales y Estatales con confianza.',
          },
        ],
        learnMore: 'Más información',
        cta: 'Comencemos',
      },
      download: {
        heading: 'Descarga ZTax App Hoy',
        subheading:
          'Declara tus impuestos en cualquier momento y lugar. Toma una foto de tu W-2 y deja que nuestra plataforma inteligente haga el resto.',
        features: [
          'DECLARACIÓN FEDERAL Y ESTATAL',
          'INGLÉS, ESPAÑOL Y ÁRABE',
          'AUTOSERVICIO O PREPARACIÓN EN VIVO',
        ],
        downloadOnThe: 'Descargar en',
        appStore: 'App Store',
        getItOn: 'Disponible en',
        googlePlay: 'Google Play',
      },
    },
    about: {
      badge: 'Sobre Nosotros',
      titleLead: 'Empoderando a los',
      titleHighlight: 'Contribuyentes',
      titleTail: 'en Todas Partes',
      intro:
        'En ZTax App, nuestra misión es simplificar la declaración de impuestos para freelancers, familias y dueños de pequeños negocios. Con precios accesibles, soporte multilingüe y seguridad de nivel industrial, ayudamos a los contribuyentes de todo EE. UU. a declarar con confianza y tranquilidad.',
      mission: {
        title: 'Nuestra Misión',
        body: 'Nuestro propósito es empoderar a los contribuyentes para soñar en grande, avanzar más rápido y construir mejores futuros financieros. En ZTax App combinamos experiencia profesional con tecnología moderna para hacer que declarar impuestos sea simple, seguro y accesible para todos.',
        cta: 'Comienza Hoy',
      },
      vision: {
        title: 'Nuestra Visión',
        body: 'Nuestra visión es simplificar la declaración de impuestos combinando experiencia profesional con tecnología moderna, creando un futuro donde el cumplimiento fiscal sea sencillo e intuitivo.',
      },
      journey: {
        badge: 'Visión',
        headingLead: 'Nuestro',
        headingHighlight: 'Camino',
        body: 'El camino de ZTax App refleja nuestra misión de simplificar la declaración de impuestos para todos. Desde nuestra fundación hasta la innovación futura, cada hito destaca nuestro compromiso con la accesibilidad, el soporte multilingüe y las soluciones seguras que empoderan a los contribuyentes en todo EE. UU.',
        beginningTitle: 'El Comienzo',
        beginningBody:
          'Fundada bajo la creencia de que todos merecen acceso a asistencia fiscal profesional y fácil de entender, sin importar el idioma o el nivel de ingresos.',
        growthTitle: 'Crecimiento e Innovación',
        growthBody:
          'Expandiendo nuestra plataforma para integrar información basada en IA y un soporte estatal más amplio, refinando continuamente la experiencia del usuario para una declaración sin complicaciones.',
      },
      why: {
        heading: '¿Por Qué Elegir ZTax App?',
        items: [
          { title: 'Simple', body: 'Diseño intuitivo que te guía paso a paso a través de formularios complejos.' },
          {
            title: 'Seguro',
            body: 'Encriptación de nivel bancario para garantizar que tus datos sensibles permanezcan protegidos.',
          },
          {
            title: 'Con Soporte',
            body: 'Asistencia profesional multilingüe disponible cuando más la necesitas.',
          },
          { title: 'Accesible', body: 'Precios transparentes sin cargos ocultos, maximizando tu reembolso.' },
        ],
      },
    },
    services: {
      badge: 'Nuestros Servicios',
      heading: 'Servicios',
      headingHighlight: 'de ZTax App',
      subheading:
        'Descubre soluciones fiscales a la medida para familias, freelancers y pequeños negocios. ZTax App hace que declarar sea simple, seguro y accesible.',
      standard: {
        label: 'Declaración de Impuestos por Cuenta Propia',
        title: 'Declaración Federal y Estatal Simple',
        includes: 'Incluye:',
        features: [
          'Declaración de Impuestos Federal',
          'Una Declaración de Impuestos Estatal',
          'Presentación Electrónica',
          'Seguimiento de Reembolso',
          'Carga Segura de Documentos',
        ],
        cta: 'Comienza Hoy',
      },
      pro: {
        badge: 'Recomendado',
        label: 'Preparación Fiscal en Vivo',
        title: 'Tarifa de Servicio',
        perReturn: 'Por Declaración',
        includes: 'Incluye Todo Además de:',
        features: [
          'Preparación Profesional',
          'Declaración Federal y Estatal',
          'Revisión de Documentos y Protección de Auditoría',
          'Soporte Fiscal Experto 24/7',
          'Soporte Multilingüe (EN, ES, AR)',
        ],
        cta: 'Conectar con un Experto',
      },
      addOns: {
        heading: 'Servicios Adicionales',
        subheading:
          'Amplía tus necesidades de declaración con nuestros servicios adicionales especializados, diseñados para situaciones financieras particulares.',
        items: [
          {
            title: 'Declaración Estatal Adicional',
            body: 'Para contribuyentes que deben declarar en más de un estado.',
          },
          {
            title: 'Declaración Enmendada',
            body: 'Para contribuyentes que necesitan enmendar una declaración presentada anteriormente.',
          },
          {
            title: 'Anexo C de Negocio',
            body: 'Incluido en la entrevista de autoservicio para freelancers.',
          },
          {
            title: 'Adelanto de Reembolso',
            body: 'Obtén una parte de tu reembolso por adelantado a través de socios participantes.',
          },
        ],
        comingSoon: 'Próximamente',
      },
      value: {
        badge: '¿Por Qué ZTax App?',
        heading: 'Simplifica tus Impuestos, de Forma Segura y Accesible',
        body: 'En ZTax App te ayudamos a generar confianza y tranquilidad en tu camino financiero. Ya seas empleado W-2, freelancer, contratista o dueño de una LLC, nuestra plataforma hace que declarar tus',
        bodyBold: 'impuestos Federales y Estatales',
        promiseTitle: 'Promesa de Precios Transparentes',
        promiseItems: ['Sin cargos ocultos.', 'Sin cargos sorpresa.', 'Un precio simple para Federal y Estatal.'],
        cta1: 'Comienza Hoy',
        cta2: 'Ver Comparaciones',
      },
      download: {
        heading: 'Descarga ZTax App Hoy',
        subheading: 'Declara tus impuestos en cualquier momento y lugar. Disponible en todas las plataformas principales.',
        features: ['Declaración Federal y Estatal', 'Inglés, Español y Árabe', 'Autoservicio o Preparación en Vivo'],
        appStore: 'App Store',
        googlePlay: 'Google Play',
        downloadOnThe: 'Descargar en',
        getItOn: 'DISPONIBLE EN',
      },
    },
    faq: {
      badge: 'Preguntas Frecuentes',
      headingLead: 'Preguntas',
      headingHighlight: 'Frecuentes',
      subheading:
        'Ponte en contacto con nuestro equipo para obtener soporte rápido y profesional. Ya sea que necesites orientación sobre declaración, precios o asistencia multilingüe, estamos a un mensaje de distancia para todas tus preguntas sobre impuestos.',
      searchPlaceholder: 'Buscar preguntas...',
      categories: { all: 'Todas', general: 'General', filing: 'Declaración', pricing: 'Precios' },
      items: [
        {
          id: 'what-is-ztax',
          question: '¿Qué es ZTax App?',
          category: 'general',
          body: 'ZTax App es una plataforma multilingüe de declaración de impuestos en línea que permite a individuos y dueños de negocios elegibles preparar y presentar electrónicamente declaraciones Federales y Estatales de forma rápida, segura y accesible.',
        },
        {
          id: 'who-can-use',
          question: '¿Quién puede usar ZTax App?',
          category: 'general',
          body: 'Empleados W-2, Contratistas y Freelancers 1099, Trabajadores Independientes y de Economía Colaborativa, y Dueños de LLC de un Solo Miembro (Anexo C).',
        },
        {
          id: 'pricing',
          question: 'Opciones de Precios',
          category: 'pricing',
          body: 'El Autoservicio cuesta $69.99 — incluye presentación electrónica, 1 declaración Estatal + Federal. La Preparación Fiscal en Vivo cuesta $150 — un experto calificado prepara y presenta por ti.',
        },
        {
          id: 'languages',
          question: '¿ZTax App está disponible en varios idiomas?',
          category: 'general',
          body: 'Sí. Actualmente ofrecemos soporte en inglés, español y árabe. En el futuro podrían agregarse más idiomas.',
        },
        {
          id: 'llc',
          question: '¿Puedo declarar los impuestos de mi LLC?',
          category: 'filing',
          body: 'Sí. Las LLC de un solo miembro que reportan actividad comercial en el Anexo C pueden declarar a través de ZTax App.',
        },
        {
          id: 'hidden-fees',
          question: '¿Hay cargos ocultos?',
          category: 'pricing',
          body: 'No. Nuestros precios son transparentes. Puede haber opciones adicionales de declaración estatal disponibles para requisitos multi-estatales por un cargo extra de $14.99 por estado.',
        },
      ],
      pricingOption: {
        selfServiceLabel: 'Autoservicio',
        selfServicePrice: '$69.99',
        selfServiceBody: 'Incluye presentación electrónica, 1 declaración Estatal + Federal.',
        livePrepLabel: 'Preparación en Vivo',
        livePrepPrice: '$150',
        livePrepBody: 'Un experto calificado prepara y presenta por ti.',
      },
      whoCanUse: [
        'Empleados W-2',
        'Contratistas y Freelancers 1099',
        'Trabajadores Independientes y de Economía Colaborativa',
        'Dueños de LLC de un Solo Miembro (Anexo C)',
      ],
      noResultsPrefix: 'Ninguna pregunta coincide con',
      noResultsSuffix: 'Intenta con otro término de búsqueda o categoría.',
      cta: {
        heading: '¿Aún tienes preguntas?',
        body: '¿No encuentras la respuesta que buscas? Nuestro equipo de soporte está aquí para ayudarte a navegar tu proceso de declaración de impuestos.',
        primary: 'Conectar con un Experto',
        secondary: 'Visitar Centro de Ayuda',
      },
    },
    footer: {
      tagline:
        'Hacemos que declarar impuestos sea simple, seguro y accesible para familias, freelancers y pequeños negocios.',
      encryption: 'Encriptación de nivel bancario en cada declaración',
      rights: 'Todos los derechos reservados. Tu seguridad es nuestra prioridad.',
      company: 'Empresa',
      aboutUs: 'Sobre Nosotros',
      services: 'Servicios',
      faqSupport: 'Preguntas y Soporte',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      security: 'Seguridad',
      contact: 'Contacto',
    },
  },

  ar: {
    common: {
      languageNames: { en: 'English', es: 'Español', ar: 'العربية' },
      fileNow: 'قدِّم الطلب الآن',
    },
    nav: { home: 'الرئيسية', services: 'الخدمات', about: 'من نحن', faq: 'أسئلة وأجوبة', contact: 'اتصل بنا' },
    header: { appStoreAria: 'حمّل التطبيق من آب ستور', googlePlayAria: 'حمّل التطبيق من جوجل بلاي' },
    home: {
      hero: {
        title: 'قدم اقرارك الضريبي الفيديراليه والولاية',
        subtitle:
          'قم باعداد وتقديم الملف الضريبي الخاص بك باستخدام هاتفك او جهازك الحاسوبي باللغات الإنجليزية والإسبانية والعربية.',
        startReturn: 'بدء عودة',
        workWithPro: 'العمل مع خبير الضريبة',
        trustedByPrefix: 'يحظى بثقة أكثر من',
        trustedByCount: '100,000',
        trustedBySuffix: 'مستخدم.',
        security: 'الأمان',
        encryption: 'تشفير بمستوى الأنظمة المصرفية',
      },
      trustBanner: ['سنوات من الخبرة المهنية', 'آمن ومشفّر', 'أسعار مناسبة', 'دعم على مدار الساعة'],
      value: {
        heading: 'تقديم الإقرارات الضريبية بسهولة وأمان وبلا توتر.',
        subheading:
          'كل ما تحتاجه لتقديم إقرارك بثقة، سواء كنت موظفًا أو مستقلًا أو صاحب عمل.',
        simpleTitle: 'مبسط',
        learnMore: 'معرفة المزيد',
        simpleStatLabel: 'سنوات من الضريبة المهنية الخبرة',
        simpleStatValue: '10+',
        valuesLabel: 'قيمنا',
        valuesLead: 'نُبسّط،',
        valuesBold: 'نؤمّن وندعم',
        secureTitle: 'آمن',
        secureStatLabel: 'حماية وتشفير البيانات',
        secureStatValue: '100%',
        supportTitle: 'السعر في متناول الجميع',
        supportStatLabel: 'محادثة مباشرة مع خبراء الضرائب',
        supportStatValue: 'دعم على مدار الساعة',
        deliverTitle: 'التزام',
        deliverBody: 'احصل على أقصى استرداد ضريبي مضمون. نراجع كل التفاصيل مرتين قبل التقديم.',
        deliverBadge: 'ضمان الدقة',
        deliverQuote:
          '"نجمع بين سنوات من الخبرة الضريبية المهنية والتقنية الحديثة لتقديم حلول تقديم موثوقة بسعر يناسب ميزانيتك."',
      },
      how: {
        label: 'كيف يعمل',
        heading: 'كيف يعمل ذلك',
        stepLabel: 'الخطوة',
        steps: [
          { title: 'انشاء الحساب الخاص بك', 
            body: 'إعداد الحساب الخاص بك آمن في بضع دقائق فقط.' 
          },
          {
            title: 'تحميل الوثائق الخاصة بك',
            body: 'تحميل W-2s ، 1099s ، وغيرها من الوثائق الضريبية بشكل آمن.',
          },
          {
            title: 'الاجابة عن الاسئلة',
            body: 'أجب عن بضعة أسئلة بسيطة، وسيحدد تطبيق ZTax وضعك الضريبي ويوجهك إلى الإقرار المناسب',
          },
          {
            title: 'تقديم الملف الضريبي',
            body: 'سوف يتم تقديم ملفك الضريبي الكترونيا لمصلحة الضرائب الأمريكية',
          },
        ],
        learnMore: 'معرفة المزيد',
        cta: 'دعونا نبدأ',
      },
      download: {
        heading: 'حمّل تطبيق ZTax اليوم',
        subheading:
          'قدّم إقراراتك الضريبية في أي وقت ومن أي مكان. التقط صورة لنموذج W-2 ودع منصتنا الذكية تتولى الباقي.',
        features: ['تقديم فيدرالي وولائي', 'إنجليزي وإسباني وعربي', 'خدمة ذاتية أو تحضير مباشر'],
        downloadOnThe: 'حمّله من',
        appStore: 'آب ستور',
        getItOn: 'متوفر على',
        googlePlay: 'جوجل بلاي',
      },
    },
    about: {
      badge: 'من نحن',
      titleLead: 'نُمكّن',
      titleHighlight: 'دافعي الضرائب',
      titleTail: 'في كل مكان',
      intro:
        'في تطبيق ZTax، مهمتنا هي تبسيط تقديم الإقرارات الضريبية للمستقلين والعائلات وأصحاب الأعمال الصغيرة. من خلال أسعار مناسبة ودعم متعدد اللغات وأمان بمعايير الصناعة، نساعد دافعي الضرائب في جميع أنحاء الولايات المتحدة على التقديم بثقة وراحة بال.',
      mission: {
        title: 'مهمتنا',
        body: 'هدفنا هو تمكين دافعي الضرائب من الحلم بشكل أكبر والتقدم بشكل أسرع وبناء مستقبل مالي أفضل. في تطبيق ZTax، نجمع بين الخبرة المهنية والتقنية الحديثة لجعل تقديم الإقرارات الضريبية بسيطًا وآمنًا ومتاحًا للجميع.',
        cta: 'ابدأ اليوم',
      },
      vision: {
        title: 'رؤيتنا',
        body: 'رؤيتنا هي تبسيط تقديم الإقرارات الضريبية من خلال الجمع بين الخبرة المهنية والتقنية الحديثة، لخلق مستقبل يكون فيه الامتثال المالي سهلاً وبديهيًا.',
      },
      journey: {
        badge: 'الرؤية',
        headingLead: 'رحلتنا',
        headingHighlight: 'ورؤيتنا',
        body: 'تعكس رحلة تطبيق ZTax مهمتنا في تبسيط تقديم الإقرارات الضريبية للجميع. من تأسيسنا وحتى الابتكار المستقبلي، يبرز كل إنجاز التزامنا بالأسعار المناسبة والدعم متعدد اللغات والحلول الآمنة التي تمكّن دافعي الضرائب في جميع أنحاء الولايات المتحدة.',
        beginningTitle: 'البداية',
        beginningBody:
          'تأسس التطبيق على إيمان بأن الجميع يستحق الوصول إلى مساعدة ضريبية مهنية وسهلة الفهم، بغض النظر عن اللغة أو مستوى الدخل.',
        growthTitle: 'النمو والابتكار',
        growthBody:
          'نوسّع منصتنا لدمج رؤى مدعومة بالذكاء الاصطناعي ودعم أوسع للولايات، مع تحسين مستمر لتجربة المستخدم لتقديم سلس.',
      },
      why: {
        heading: 'لماذا تختار تطبيق ZTax؟',
        items: [
          { title: 'سهولة', body: 'تصميم بديهي يرشدك خطوة بخطوة عبر النماذج المعقدة.' },
          { title: 'أمان', body: 'تشفير بمستوى البنوك لضمان حماية بياناتك الحساسة.' },
          { title: 'دعم', body: 'مساعدة مهنية متعددة اللغات متاحة عند حاجتك إليها أكثر.' },
          { title: 'سعر مناسب', body: 'أسعار شفافة بلا رسوم خفية، لتعظيم استردادك الضريبي.' },
        ],
      },
    },
    services: {
      badge: 'خدماتنا',
      heading: 'خدمات',
      headingHighlight: 'تطبيق ZTax',
      subheading:
        'اكتشف حلولاً ضريبية مصممة خصيصًا للعائلات والمستقلين والأعمال الصغيرة. تطبيق ZTax يجعل التقديم بسيطًا وآمنًا وبأسعار مناسبة.',
      standard: {
        label: 'تقديم ضريبي بالخدمة الذاتية',
        title: 'إقرار فيدرالي وولائي بسيط',
        includes: 'يشمل:',
        features: [
          'إقرار ضريبي فيدرالي',
          'إقرار ضريبي ولائي واحد',
          'تقديم إلكتروني',
          'تتبع الاسترداد الضريبي',
          'رفع آمن للمستندات',
        ],
        cta: 'ابدأ اليوم',
      },
      pro: {
        badge: 'موصى به',
        label: 'تحضير ضريبي مباشر',
        title: 'رسوم الخدمة',
        perReturn: 'لكل إقرار',
        includes: 'يشمل كل ما سبق بالإضافة إلى:',
        features: [
          'تحضير احترافي',
          'إقرار فيدرالي وولائي',
          'مراجعة المستندات وحماية من التدقيق',
          'دعم خبراء ضرائب على مدار الساعة',
          'دعم متعدد اللغات (إنجليزي، إسباني، عربي)',
        ],
        cta: 'تواصل مع خبير',
      },
      addOns: {
        heading: 'خدمات إضافية',
        subheading: 'وسّع احتياجات تقديمك من خلال خدماتنا الإضافية المتخصصة المصممة للحالات المالية الفريدة.',
        items: [
          { title: 'إقرار ولائي إضافي', body: 'لدافعي الضرائب المطالبين بالتقديم في أكثر من ولاية.' },
          { title: 'تعديل الإقرار', body: 'لدافعي الضرائب الذين يحتاجون لتعديل إقرار مُقدَّم سابقًا.' },
          { title: 'الجدول C للأعمال', body: 'مشمول ضمن مقابلة الخدمة الذاتية للمستقلين.' },
          { title: 'سلفة على الاسترداد', body: 'احصل على جزء من استردادك الضريبي مبكرًا عبر شركائنا المشاركين.' },
        ],
        comingSoon: 'قريبًا',
      },
      value: {
        badge: 'لماذا تطبيق ZTax؟',
        heading: 'بسّط ضرائبك بأمان وبأسعار مناسبة',
        body: 'في تطبيق ZTax، نساعدك على بناء الثقة وراحة البال في رحلتك المالية. سواء كنت موظفًا أو مستقلًا أو متعاقدًا أو صاحب شركة ذات مسؤولية محدودة، فإن منصتنا تجعل تقديم',
        bodyBold: 'الإقرارات الفيدرالية والولائية',
        promiseTitle: 'وعد الأسعار الشفافة',
        promiseItems: ['بلا رسوم خفية.', 'بلا رسوم مفاجئة.', 'سعر واحد بسيط للفيدرالي والولائي.'],
        cta1: 'ابدأ اليوم',
        cta2: 'قارن الخطط',
      },
      download: {
        heading: 'حمّل تطبيق ZTax اليوم',
        subheading: 'قدّم إقراراتك الضريبية في أي وقت ومن أي مكان. متوفر على جميع المنصات الرئيسية.',
        features: ['تقديم فيدرالي وولائي', 'إنجليزي وإسباني وعربي', 'خدمة ذاتية أو تحضير مباشر'],
        appStore: 'آب ستور',
        googlePlay: 'جوجل بلاي',
        downloadOnThe: 'حمّله من',
        getItOn: 'متوفر على',
      },
    },
    faq: {
      badge: 'الأسئلة الشائعة',
      headingLead: 'الأسئلة',
      headingHighlight: 'الشائعة',
      subheading:
        'تواصل مع فريقنا للحصول على دعم سريع واحترافي. سواء كنت بحاجة إلى إرشاد حول التقديم أو الأسعار أو المساعدة متعددة اللغات، نحن على بُعد رسالة واحدة للإجابة عن جميع أسئلتك الضريبية.',
      searchPlaceholder: 'ابحث عن سؤال...',
      categories: { all: 'الكل', general: 'عام', filing: 'التقديم', pricing: 'الأسعار' },
      items: [
        {
          id: 'what-is-ztax',
          question: 'ما هو تطبيق ZTax؟',
          category: 'general',
          body: 'تطبيق ZTax هو منصة تقديم ضرائب إلكترونية متعددة اللغات تتيح للأفراد وأصحاب الأعمال المؤهلين تحضير إقراراتهم الضريبية الفيدرالية والولائية وتقديمها إلكترونيًا بسرعة وأمان وبأسعار مناسبة.',
        },
        {
          id: 'who-can-use',
          question: 'من يمكنه استخدام تطبيق ZTax؟',
          category: 'general',
          body: 'الموظفون (W-2)، المتعاقدون والمستقلون (1099)، العاملون لحسابهم الخاص وعمال الاقتصاد التشاركي، وأصحاب الشركات ذات المسؤولية المحدودة بعضو واحد (الجدول C).',
        },
        {
          id: 'pricing',
          question: 'خيارات الأسعار',
          category: 'pricing',
          body: 'الخدمة الذاتية بسعر ٦٩.٩٩ دولارًا — تشمل التقديم الإلكتروني وإقرارًا ولائيًا واحدًا بالإضافة للفيدرالي. التحضير الضريبي المباشر بسعر ١٥٠ دولارًا — يقوم خبير مؤهل بالتحضير والتقديم نيابة عنك.',
        },
        {
          id: 'languages',
          question: 'هل تطبيق ZTax متوفر بعدة لغات؟',
          category: 'general',
          body: 'نعم. ندعم حاليًا الإنجليزية والإسبانية والعربية. وقد تُضاف لغات إضافية في المستقبل.',
        },
        {
          id: 'llc',
          question: 'هل يمكنني تقديم ضرائب شركتي ذات المسؤولية المحدودة؟',
          category: 'filing',
          body: 'نعم. يمكن للشركات ذات المسؤولية المحدودة بعضو واحد التي تُبلّغ عن نشاطها التجاري في الجدول C التقديم عبر تطبيق ZTax.',
        },
        {
          id: 'hidden-fees',
          question: 'هل هناك رسوم خفية؟',
          category: 'pricing',
          body: 'لا. أسعارنا شفافة تمامًا. قد تتوفر خيارات تقديم ولائية إضافية لمتطلبات التعدد الولائي مقابل رسوم إضافية قدرها ١٤.٩٩ دولارًا لكل ولاية.',
        },
      ],
      pricingOption: {
        selfServiceLabel: 'الخدمة الذاتية',
        selfServicePrice: '٦٩.٩٩$',
        selfServiceBody: 'تشمل التقديم الإلكتروني وإقرارًا ولائيًا واحدًا بالإضافة للفيدرالي.',
        livePrepLabel: 'التحضير المباشر',
        livePrepPrice: '١٥٠$',
        livePrepBody: 'يقوم خبير مؤهل بالتحضير والتقديم نيابة عنك.',
      },
      whoCanUse: [
        'الموظفون (W-2)',
        'المتعاقدون والمستقلون (1099)',
        'العاملون لحسابهم الخاص وعمال الاقتصاد التشاركي',
        'أصحاب الشركات ذات المسؤولية المحدودة بعضو واحد (الجدول C)',
      ],
      noResultsPrefix: 'لا توجد أسئلة مطابقة لـ',
      noResultsSuffix: 'جرّب كلمة بحث أو تصنيفًا آخر.',
      cta: {
        heading: 'هل ما زال لديك أسئلة؟',
        body: 'لم تجد الإجابة التي تبحث عنها؟ فريق الدعم لدينا هنا لمساعدتك في رحلة تقديم إقرارك الضريبي.',
        primary: 'تواصل مع خبير',
        secondary: 'زيارة مركز المساعدة',
      },
    },
    footer: {
      tagline: 'نجعل تقديم الإقرارات الضريبية بسيطًا وآمنًا وبأسعار مناسبة للعائلات والمستقلين والأعمال الصغيرة.',
      encryption: 'تشفير بمستوى البنوك في كل إقرار',
      rights: 'جميع الحقوق محفوظة. أمانك هو أولويتنا.',
      company: 'الشركة',
      aboutUs: 'من نحن',
      services: 'الخدمات',
      faqSupport: 'الأسئلة والدعم',
      legal: 'قانوني',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      security: 'الأمان',
      contact: 'تواصل معنا',
    },
  },
}
