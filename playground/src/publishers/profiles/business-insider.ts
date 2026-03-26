import type { PublisherProfile } from '../types';

export const businessInsider: PublisherProfile = {
  id: 'business-insider',
  name: 'Business Insider',
  logo: '/assets/logos/bi-logo.svg',
  url: 'https://www.businessinsider.com',
  category: 'news',
  typography: {
    headlineFont: "'Libre Franklin', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    bodyFont: "'Exchange', Georgia, 'Times New Roman', Times, serif",
    cardTitleFont: "'Roboto', sans-serif",
    navFont: "'Libre Franklin', sans-serif",
  },
  colors: {
    primary: '#0A6ABF',
    secondary: '#333333',
    accent: '#D32F2F',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#333333',
    textSecondary: '#666666',
    border: '#E0E0E0',
    navBg: '#FFFFFF',
    navText: '#333333',
  },
  layout: {
    contentWidth: '1100px',
    hasRightRail: true,
    headerStyle: 'mega-nav',
  },
};
