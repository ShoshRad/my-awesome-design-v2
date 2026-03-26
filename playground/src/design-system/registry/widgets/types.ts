export type WidgetStatus = 'active' | 'placeholder' | 'coming-soon';
export type Viewport = 'desktop' | 'mobile';

export interface WidgetCardRef {
  cardId: string;
  label: string;
  supportedViewports: Viewport[];
}

export interface WidgetLayoutRef {
  layoutId: string;
  label: string;
}

export interface WidgetDefinition {
  id: string;
  name: string;
  description: string;
  status: WidgetStatus;
  category: 'feed' | 'inline' | 'overlay' | 'sidebar';
  supportedViewports: Viewport[];
  cards: WidgetCardRef[];
  layouts: WidgetLayoutRef[];
  placements: string[];
}
