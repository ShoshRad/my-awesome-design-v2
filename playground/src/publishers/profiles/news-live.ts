import type { PublisherProfile } from '../types';

export const newsLive: PublisherProfile = {
  id: 'news-live',
  name: 'NEWS LIVE',
  logo: '/assets/logos/newslive-logo.svg',
  url: '#',
  category: 'news',
  typography: {
    headlineFont: "'Inter', sans-serif",
    bodyFont: "'Inter', sans-serif",
    cardTitleFont: "'Roboto', sans-serif",
    navFont: "'Noto Sans', sans-serif",
  },
  colors: {
    primary: '#00539C',
    secondary: '#001F60',
    accent: '#FFC72A',
    background: '#F4F4F4',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#7F7979',
    border: '#E6E6E6',
    navBg: '#373850',
    navText: '#FFFFFF',
  },
  layout: {
    contentWidth: '1140px',
    hasRightRail: false,
    headerStyle: 'simple',
  },
};
