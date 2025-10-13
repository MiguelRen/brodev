# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **PlusBienes** real estate application built with **Nuxt 4** and **Vue 3**, styled with **TailwindCSS**. The project appears to be a property listing and real estate services platform with a focus on buying, selling, and property valuation.

## Development Commands

### Package Management
The project uses **pnpm** as the package manager (specified in package.json).

```powershell
# Install dependencies
pnpm install

# Development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Generate static site
pnpm generate
```

### Alternative Package Managers
If pnpm is not available, these alternatives work:
```powershell
# Using npm
npm install
npm run dev
npm run build

# Using yarn
yarn install
yarn dev
yarn build

# Using bun
bun install
bun run dev
bun run build
```

## Architecture & Project Structure

### Framework Stack
- **Nuxt 4.1.1** - Vue.js meta-framework with SSR/SSG capabilities
- **Vue 3.5.21** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript development
- **TailwindCSS 4.1.13** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing tools

### Directory Structure
```
app/
├── components/
│   ├── home/           # Homepage-specific components
│   │   ├── NavBar.vue  # Navigation component
│   │   ├── BodyBar.vue # Main content/hero section
│   │   └── FootBar.vue # Footer actions/links
│   └── index.vue       # Main landing page component
├── pages/
│   ├── index.vue       # Homepage route (/)
│   └── Aboutus.vue     # About page route (/aboutus)
├── assets/
│   ├── css/
│   │   └── main.css    # Global CSS with TailwindCSS imports
│   └── images/         # Static images (e.g., gifttest.gif background)
public/                 # Static assets served directly
```

### Component Architecture

**Layout Pattern**: The application uses a **component composition pattern** where:
- `NavBar` handles site navigation with links to Premium, Destacados, Comprar, Vender, etc.
- `BodyBar` contains the main hero message and content
- `FootBar` provides call-to-action buttons for core functions (Search, Buy, Property Valuation)

**Styling Approach**:
- **TailwindCSS** for utility classes and responsive design
- **Scoped styles** in individual Vue components for component-specific styling
- **Global CSS variables** defined for consistent theming (color-text, color-background, color-accent)
- **Typography**: Uses serif fonts (Lora, Playfair Display) for elegant real estate aesthetic

### Configuration Files
- `nuxt.config.ts` - Nuxt configuration with TailwindCSS Vite plugin
- `tsconfig.json` - TypeScript configuration using Nuxt's generated configs
- `package.json` - Dependencies and scripts, specifies pnpm as package manager

### Key Features & Business Logic
- **Real Estate Focus**: Navigation includes property-related sections (Premium properties, Featured, Buy, Sell, Property valuation)
- **Bilingual Content**: Spanish language content suggests Spanish-speaking market
- **Visual Design**: Uses background images/GIFs with overlay effects for visual appeal
- **SEO Optimization**: Meta tags and structured head content using Nuxt's `useHead` composable

### Development Notes
- The project uses Nuxt 4's `app/` directory structure (newer than traditional `pages/` at root)
- Components are organized by feature/page (`home/` subdirectory for homepage components)
- TypeScript setup follows Nuxt's recommended project references pattern
- TailwindCSS is configured through Vite plugin rather than traditional PostCSS setup