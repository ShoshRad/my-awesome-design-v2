# Sandbox

Temporary workspace for experimenting with publisher feed layouts.

## Purpose

The Sandbox is for users who clone this repo and want to mock up different publisher feeds
using the available card components. Use it to:

- Mock up a feed for a specific publisher
- Test different card arrangements
- Experiment with different content mixes
- Create presentation-ready feed demos

## How to Use

1. Create a new folder in `sandbox/` with your publisher name
2. Create a TSX file that imports cards from the registry
3. Compose your feed layout using FeedSection, CardGrid, and card components
4. View it at `/preview` or create a new route in `app/`

## Rules

- **DO NOT modify files in `registry/`** — that's the Architect's domain
- **DO NOT modify design tokens** — use them as-is
- You CAN create new sandbox experiments freely
- You CAN create new routes in `app/` to preview your sandbox work
