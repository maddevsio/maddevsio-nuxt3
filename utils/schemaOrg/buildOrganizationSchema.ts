interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
  image?: string;
  sameAs?: string[];
}

interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface ContactPoint {
  '@type': 'ContactPoint';
  contactType: string;
  telephone: string;
  email: string;
}

interface OrganizationJsonLD {
  '@context': string;
  '@type': 'Organization';
  name: string;
  legalName?: string;
  url: string;
  logo: string;
  description: string;
  foundingDate?: string;
  founders?: Person[];
  address?: PostalAddress;
  contactPoint?: ContactPoint;
  sameAs?: string[];
}

export const buildOrganizationSchema = (): OrganizationJsonLD => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mad Devs',
    legalName: 'Mad Devs Group LTD',
    url: 'https://maddevs.io/',
    logo: 'https://maddevs.io/Open-Graph.png',
    description: 'Mad Devs Group LTD is a software development company headquartered in London, which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.',
    foundingDate: '2016',
    founders: [
      {
        '@type': 'Person',
        name: 'Oleg Puzanov',
        url: 'https://maddevs.io/blog/author/oleg-puzanov/',
        image: 'https://images.prismic.io/superpupertest/6209b044-4a04-49aa-8021-f16282ce7298_OlegPuzanov.png?auto=compress,format',
        sameAs: [
          'https://www.linkedin.com/in/oleg-puzanov-a82ba3131/',
          'https://github.com/puzanov'],
      },
      {
        '@type': 'Person',
        name: 'Alla Klimenko',
        url: 'https://maddevs.io/blog/author/alla-klimenko/',
        image: 'https://images.prismic.io/superpupertest/3969ac59-ca60-4f53-8ffc-bf9959a81fb7_Alla-.jpeg?auto=compress,format',
        sameAs: [
          'https://www.linkedin.com/in/alla-klimenko-7aa91b19/'],
      },
      {
        '@type': 'Person',
        name: 'Andrew Sapozhnikov',
        url: 'https://maddevs.io/blog/author/andrew-sapozhnikov/',
        image: 'https://images.prismic.io/superpupertest/0bd3b0ec-ec00-455e-ac71-b15cbca88121_Andrew-S.jpeg?auto=compress,format',
        sameAs: [
          'https://www.linkedin.com/in/andrew-sapozhnikov-6593a1143/',
          'https://github.com/halfb00t'],
      }],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27 Old Gloucester Street',
      addressLocality: 'London',
      addressRegion: 'England',
      postalCode: 'WC1N3AX',
      addressCountry: 'UK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '[+442039848555]',
      email: 'team@maddevs.io',
    },
    sameAs: [
      'https://clutch.co/profile/mad-devs',
      'https://www.linkedin.com/company/mad-devs',
      'https://www.crunchbase.com/organization/mad-devs',
      'https://www.designrush.com/agency/profile/mad-devs',
      'https://www.goodfirms.co/company/mad-devs',
      'https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm',
      'https://github.com/maddevsio',
      'https://www.facebook.com/maddevsllc',
      'https://twitter.com/MadDevsIO',
      'https://www.instagram.com/maddevsio',
    ],
  }
}
