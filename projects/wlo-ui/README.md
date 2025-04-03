# WLO UI

**WLO UI** is a modern and customizable component library for Angular, designed to accelerate development and ensure consistency across applications. Built with SCSS, it supports light and dark themes, provides reusable tokens, and encourages scalability.

## Installation

```bash
npm install wlo-ui
```

## Setup

### 1. Configure Global Styles

In your `angular.json`, make sure to include the `styles` and `stylePreprocessorOptions` pointing to the SCSS variables and theme files:

```json
"styles": [
  "src/styles.scss"
],
"stylePreprocessorOptions": {
  "includePaths": [
    "node_modules/wlo-ui/styles"
  ]
}
```

### 2. Import Component

Each component is standalone and can be imported individually:

```ts
import { WloButtonComponent } from 'wlo-ui';
```

In your template:

```html
<wlo-button
  variant="primary"
  label="Click me"
  (clicked)="onClick()"
></wlo-button>
```

## Theming

WLO UI supports **light** and **dark** themes using CSS variables and SCSS maps. Themes are automatically injected using a `ThemeService`, and theme switching is done by toggling the `data-theme` attribute on the `<body>` tag:

```ts
themeService.setTheme('light'); // or 'dark'
```

### Custom Properties

The following CSS variables are available for styling:

```scss
--color-bg
--color-text
--color-primary
--color-secondary
--color-muted
--color-border
--color-hover

--color-button-text
--color-button-bg
--color-button-hover-bg
```

## Components

### Button

A flexible button component that supports:

- Variants: `primary`, `secondary`, `outline`, `ghost`, `link`, `danger`, `icon`
- Sizes: `sm`, `md`, `lg`, `icon`
- States: `loading`, `disabled`
- Icons (via Material Icons or custom image source)
- Click output: `(clicked)="handler()"`

```html
<wlo-button
  variant="outline"
  size="md"
  label="Submit"
  icon="check"
  [loading]="false"
  (clicked)="onSubmit()"
></wlo-button>
```

### Typography

Use `wlo-typography` to standardize text elements with variants such as:

- `h1`, `h2`, `h3`, `h4`
- `p`, `lead`, `muted`, `large`, `small`
- `blockquote`, `list`, `code`

```html
<wlo-typography tag="h2" variant="h2" text="Section title" />
```

## Structure and Style Tokens

The library exposes a SCSS structure with design tokens, including:

- Spacing (`$space-sm`, `$space-md`, etc.)
- Font sizes and weights
- Border radius (`$radius-sm`, `$radius-md`)
- Color scales (slate, gray, red)

## Roadmap

- Input and form controls
- Modal and toast components
- Responsive grid system
- Accessibility improvements

## License

MIT
