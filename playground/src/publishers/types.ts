export interface PublisherTypography {
  headlineFont: string;
  bodyFont: string;
  cardTitleFont: string;
  navFont: string;
}

export interface PublisherColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  navBg: string;
  navText: string;
}

export interface PublisherProfile {
  id: string;
  name: string;
  logo: string;
  favicon?: string;
  url: string;
  category: 'news' | 'entertainment' | 'finance' | 'sports' | 'tech' | 'lifestyle';
  typography: PublisherTypography;
  colors: PublisherColors;
  layout: {
    contentWidth: string;
    hasRightRail: boolean;
    headerStyle: 'simple' | 'mega-nav' | 'minimal';
  };
}
