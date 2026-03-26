export type { WidgetDefinition, WidgetCardRef, WidgetLayoutRef, WidgetStatus, Viewport } from './types';
export { WIDGET_CATALOG } from './catalog';
export { PremiumFeed } from './PremiumFeed';
export { RegularFeed } from './RegularFeed';
export { DeeperDive } from './DeeperDive';

import type { WidgetStatus, WidgetDefinition } from './types';
import { WIDGET_CATALOG } from './catalog';

export function getWidget(id: string): WidgetDefinition | undefined {
  return WIDGET_CATALOG.find((w) => w.id === id);
}

export function getWidgetsByStatus(status: WidgetStatus): WidgetDefinition[] {
  return WIDGET_CATALOG.filter((w) => w.status === status);
}

export function getMockableWidgets(): WidgetDefinition[] {
  return WIDGET_CATALOG.filter((w) => w.status === 'active' || w.status === 'placeholder');
}
