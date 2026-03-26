import type { PublisherProfile } from '../types';

export const tOnline: PublisherProfile = {
  id: 't-online',
  name: 't-online',
  logo: '/assets/logos/t-online-logo.svg',
  url: 'https://www.t-online.de',
  category: 'news',
  typography: {
    headlineFont: "Georgia, 'Times New Roman', serif",
    bodyFont: "system-ui, 'Roboto', sans-serif",
    cardTitleFont: "'Roboto', sans-serif",
    navFont: "system-ui, 'Roboto', sans-serif",
  },
  colors: {
    primary: '#E20074',
    secondary: '#171B26',
    accent: '#E20074',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#171B26',
    textSecondary: '#8D93A6',
    border: '#CFD5E5',
    navBg: '#FFFFFF',
    navText: '#8D93A6',
  },
  layout: {
    contentWidth: '997px',
    hasRightRail: false,
    headerStyle: 'simple',
  },
};
