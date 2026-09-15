// Single place for business facts used across the site.
// Change the phone here and every tel: link, header, footer and schema block updates.
export const site = {
  name: 'Nextdoor Payments',
  legalName: 'Nextdoor Payments',
  url: 'https://nextdoorpayments.com',
  tagline: 'Local merchant services, dual pricing, Clover POS and payment gateways',
  // CallScaler tracking number. Forward it to the line you actually answer.
  phoneDisplay: '(213) 934-8686',
  phoneE164: '+12139348686',
  // Secondary line kept for reference and for Google Business Profile later.
  altPhoneDisplay: '(858) 888-1419',
  altPhoneE164: '+18588881419',
  email: 'hello@nextdoorpayments.com',
  hours: 'Mon to Sat, 7am to 7pm PT. Text any time.',
  areaServed: ['San Diego, CA', 'Los Angeles, CA', 'Orange County, CA', 'California', 'United States'],
  founderName: 'Jonathan Kennedy',
  social: {} as Record<string, string>,
  // Set in .env for production. Empty values disable the feature.
  // Google Tag Manager container. Fires on every page; call_click, text_click and lead_submit are pushed to dataLayer.
  gtmId: (import.meta.env.PUBLIC_GTM_ID as string | undefined) || 'GTM-THTHFFN9',
  gaId: import.meta.env.PUBLIC_GA_ID as string | undefined,
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined,
  callscalerSrc: import.meta.env.PUBLIC_CALLSCALER_SRC as string | undefined,
};

export const tel = `tel:${site.phoneE164}`;
export const sms = (body?: string) =>
  `sms:${site.phoneE164}${body ? `?&body=${encodeURIComponent(body)}` : ''}`;

export const nav = [
  { label: 'Clover POS', href: '/clover' },
  { label: 'Payment Gateways', href: '/gateways' },
  { label: 'Dual Pricing', href: '/dual-pricing' },
  { label: 'Industries', href: '/industries' },
  { label: 'Become an Agent', href: '/opportunity' },
];
