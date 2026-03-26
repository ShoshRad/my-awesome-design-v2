import type { PublisherProfile } from '../types';

export const usaToday: PublisherProfile = {
  id: 'usa-today',
  name: 'USA TODAY',
  logo: '/assets/usa-today/logo.svg',
  url: 'https://www.usatoday.com',
  category: 'news',
  typography: {
    headlineFont: "'Unify Sans', 'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif",
    bodyFont: "'Georgia Pro', Georgia, 'Droid Serif', serif",
    cardTitleFont: "'Unify Sans', 'Helvetica Neue', Arial, sans-serif",
    navFont: "'Unify Sans', 'Helvetica Neue', Arial, sans-serif",
  },
  colors: {
    primary: '#0098FE',
    secondary: '#1665cf',
    accent: '#0098FE',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#303030',
    textSecondary: '#626262',
    border: '#e0e0e0',
    navBg: '#FFFFFF',
    navText: '#303030',
  },
  layout: {
    contentWidth: '900px',
    hasRightRail: true,
    headerStyle: 'simple',
  },
};
