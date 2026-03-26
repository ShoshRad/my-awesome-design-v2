import type { PublisherProfile } from '../types';

export const generic: PublisherProfile = {
  id: 'generic',
  name: 'Publisher Demo',
  logo: '',
  url: '#',
  category: 'news',
  typography: {
    headlineFont: "'Inter', sans-serif",
    bodyFont: "'Inter', sans-serif",
    cardTitleFont: "'Roboto', sans-serif",
    navFont: "'Inter', sans-serif",
  },
  colors: {
    primary: '#1a1a1a',
    secondary: '#444444',
    accent: '#0066cc',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#1a1a1a',
    textSecondary: '#666666',
    border: '#e0e0e0',
    navBg: '#1a1a1a',
    navText: '#ffffff',
  },
  layout: {
    contentWidth: '1100px',
    hasRightRail: false,
    headerStyle: 'minimal',
  },
};
