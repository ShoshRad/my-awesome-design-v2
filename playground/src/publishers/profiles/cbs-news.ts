import type { PublisherProfile } from '../types';

export const cbsNews: PublisherProfile = {
  id: 'cbs-news',
  name: 'CBS News',
  logo: '/assets/cbs-news/logo-white.png',
  url: 'https://www.cbsnews.com',
  category: 'news',
  typography: {
    headlineFont: '"Proxima Nova", Arial, sans-serif',
    bodyFont: '"Proxima Nova", Arial, sans-serif',
    cardTitleFont: '"Proxima Nova", Arial, sans-serif',
    navFont: '"Proxima Nova", Arial, sans-serif',
  },
  colors: {
    primary: '#b60505',
    secondary: '#1e1e1e',
    accent: '#b60505',
    background: '#ffffff',
    surface: '#f2f2f2',
    text: '#121e40',
    textSecondary: '#666666',
    border: '#121e401f',
    navBg: '#1e1e1e',
    navText: '#cccccc',
  },
  layout: {
    contentWidth: '1040px',
    hasRightRail: true,
    headerStyle: 'mega-nav',
  },
};
