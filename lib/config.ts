// EuroConform Application Configuration

export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'EuroConform',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  company: {
    name: process.env.COMPANY_NAME || 'EuroConform Ltd',
    address: process.env.COMPANY_ADDRESS || 'Malta',
    insurance: process.env.INSURANCE_COVERAGE || '€1 million',
  },
  packages: {
    bronze: {
      name: 'Bronze',
      maxProducts: 10,
      price: 100000, // €1000 in cents
      features: [
        'Malta EU address',
        'Label generator',
        'Verification page',
        'Email support',
      ],
    },
    silver: {
      name: 'Silver',
      maxProducts: 50,
      price: 180000, // €1800 in cents
      features: [
        'Everything in Bronze',
        'Priority support',
        'Audit export',
        'Partner onboarding help',
      ],
    },
    gold: {
      name: 'Gold',
      maxProducts: Infinity,
      price: 300000, // €3000 in cents
      features: [
        'Everything in Silver',
        'Dedicated manager',
        'SLA',
        'Custom limits',
      ],
    },
  },
  addOns: {
    technicalFileCheck: {
      name: 'Technical File Check',
      price: 10000, // €100/hour in cents
      unit: 'per hour',
    },
    dppOnboarding: {
      name: 'DPP Onboarding',
      price: 20000, // €200/SKU in cents
      unit: 'per SKU',
      phase: 2,
      visible: false, // Hidden initially
    },
  },
  referrals: {
    commissionRate: 0.20, // 20%
  },
  email: {
    from: process.env.SMTP_FROM || 'noreply@euroconform.eu',
    replyTo: process.env.SMTP_REPLY_TO || 'rudvel@gmail.com',
  },
  legal: {
    article4: {
      regulation: 'Regulation (EU) 2019/1020',
      title: 'Market Surveillance',
      article: 'Article 4',
      description: 'EU Authorised Representative',
    },
    article16: {
      regulation: 'Regulation (EU) 2023/988',
      title: 'General Product Safety',
      article: 'Article 16',
      description: 'Responsible Person',
    },
  },
} as const;

export type PackageType = keyof typeof config.packages;
export type AddOnType = keyof typeof config.addOns;

