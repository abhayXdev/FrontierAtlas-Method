---
name: Frontier Atlas
colors:
  surface: '#fafaf5'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ef'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#5d4038'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#926f66'
  outline-variant: '#e7bdb3'
  surface-tint: '#b32b00'
  primary: '#ae2900'
  on-primary: '#ffffff'
  primary-container: '#da3600'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a1'
  secondary: '#5d5e63'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe4'
  on-secondary-container: '#616267'
  tertiary: '#5c5d51'
  on-tertiary: '#ffffff'
  tertiary-container: '#757569'
  on-tertiary-container: '#fffdee'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd2'
  primary-fixed-dim: '#ffb4a1'
  on-primary-fixed: '#3c0800'
  on-primary-fixed-variant: '#891e00'
  secondary-fixed: '#e2e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1c1f'
  on-secondary-fixed-variant: '#45474b'
  tertiary-fixed: '#e5e3d4'
  tertiary-fixed-dim: '#c8c7b9'
  on-tertiary-fixed: '#1b1c13'
  on-tertiary-fixed-variant: '#47473d'
  background: '#fafaf5'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  container-max: 1280px
  gutter: 20px
---

## Brand & Style

The design system is engineered for high-utility research environments where information density and clarity are paramount. It adopts a **refined minimalist** aesthetic, blending the technical precision of developer tools with the sophisticated restraint of premium editorial platforms.

The target audience consists of AI researchers, engineers, and data scientists who require a workspace that minimizes cognitive load while maximizing data throughput. The emotional response is one of **rigorous excellence, focus, and reliability.**

Key stylistic principles:
- **Functional Density:** Information is packed efficiently without feeling cluttered, utilizing tight spacing and clear visual hierarchies.
- **Flat UI Architecture:** No gradients, no blurs, and no skeuomorphism. Depth is communicated through tonal shifts and hairline borders rather than shadows.
- **Intentional Friction:** Interactions are snappy and purposeful, reflecting the "speed of thought" required for deep technical analysis.

## Colors

This design system utilizes a "Warm Mono" palette. The base is grounded in `#F3F3EE`, providing a softer, more readable canvas than pure white for long-form research, while `#FFFFFF` is reserved for elevated surfaces and interactive cards.

- **Brand (#F43E01):** Used exclusively for primary actions, critical status indicators, and subtle brand markers. It is a high-energy orange that commands attention against the muted background.
- **Primary Text (#2D2F33):** A deep, near-black charcoal used for headings and body text to ensure maximum contrast.
- **Secondary Text (#69695D):** A desaturated olive-grey for metadata, captions, and labels, providing clear visual separation from primary content.
- **Interactions:** The `#E8E8DE` hover state provides a tactile, low-contrast feedback loop that maintains the minimalist aesthetic.

## Typography

The typography system is built entirely on **Inter**, optimized for legibility in data-heavy environments. The scale uses tight letter spacing (tracking) for a modern, "locked-in" feel common in high-end productivity software.

- **Weight Usage:** Use `600` for primary headings, `500` for interactive elements and labels, and `400` for all body and descriptive text.
- **Tight Tracking:** Negative letter spacing should be applied to all sizes 16px and above to create a professional, compact appearance.
- **Readability:** Body text uses a slightly increased line height (1.5–1.6) to facilitate long-form reading of research abstracts and methodology papers.

## Layout & Spacing

The design system employs a **12-column fluid grid** with fixed maximum widths for desktop to ensure line lengths remain readable. 

- **The 4px Rhythm:** All spacing (padding, margins, component heights) must be a multiple of 4px. This creates a rigorous mathematical alignment across the UI.
- **High Density:** Gutters are kept tight (20px) to maximize horizontal space for complex data tables.
- **Desktop:** 12 columns, 40px side margins.
- **Tablet:** 8 columns, 24px side margins.
- **Mobile:** 4 columns, 16px side margins. 
- **Content Reflow:** Data tables should transition to a card-based "feed" view on mobile, or utilize horizontal overflow with a persistent first column.

## Elevation & Depth

This system intentionally avoids ambient shadows to maintain a flat, professional "architectural" look. Depth is conveyed through:

- **Tonal Layering:** The base layer is `#F3F3EE`. The secondary layer (cards, sidebar, navigation) is `#FFFFFF`.
- **Hairline Borders:** Use 1px solid borders in `#E1E1D7` to define boundaries between components. 
- **Interaction States:** Hover states use a subtle fill change (`#E8E8DE`) rather than a lift or shadow.
- **Z-Index Strategy:** Only global navigation and modals sit on a higher plane, indicated by a single, sharp 1px border separation rather than a drop shadow.

## Shapes

The shape language is disciplined and geometric. 
- **Radius:** A consistent `4px` (Soft) radius is applied to buttons, input fields, and cards. This provides a hint of approachability while maintaining a precise, technical character.
- **Iconography:** Use 20px icons with a 1.5pt or 2pt stroke width. Icons should be monolinear and strictly geometric to match the Inter typeface.

## Components

### Navigation & Breadcrumbs
- **Locked Navigation:** A persistent top-bar or sidebar using a `#FFFFFF` background with a bottom/right border of 1px `#E1E1D7`. 
- **Breadcrumbs:** Use `body-sm` in `Secondary Text`. Separators should be a simple `/` or chevron.

### Hero Sections
- Minimalist headers using `display` typography. No background imagery; use high-contrast text against `#F3F3EE` to establish hierarchy.

### Data Tables (SOTA)
- **Header:** `label-sm` with a light background fill of `#E8E8DE`.
- **Cells:** `body-sm` or `body-md` with 12px vertical padding. Use hairline horizontal dividers only.
- **Primary Column:** Use `600` weight for the model/method name to allow for quick scanning.

### Metrics Cards
- Compact containers with `#FFFFFF` fill and 1px border. 
- Large numeric value (`headline-lg`) paired with a `label-sm` description.

### Feed Items
- Used for research updates. Features a `body-md` title, a `body-sm` snippet of the abstract in `Secondary Text`, and `label-md` tags for AI domains (e.g., "LLMs", "Diffusion").

### Buttons & Inputs
- **Primary Button:** `#F43E01` background, white text, `500` weight.
- **Secondary Button:** White background, 1px border, `#2D2F33` text.
- **Inputs:** Subtle `#F3F3EE` fill, transitioning to a white background with a 1px `#F43E01` border on focus. No inner shadows.