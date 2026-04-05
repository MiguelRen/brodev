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
            │   ├── bio/                # Bio section components
            │   ├── home/               # Homepage-specific components
            │   │   ├── dropdowns/      # Dropdown components
            │   │   │   └── AboutUs.vue # About Us dropdown component
            │   │   ├── BodyBar.vue     # Main content/hero section
            │   │   ├── FootBar.vue     # Footer actions/links
            │   │   └── NavBar.vue      # Navigation component
            │   ├── Button.vue          # Reusable button component
            │   ├── DropdownMenu.vue    # Dropdown menu component
            │   └── index.vue           # Main landing page component
            ├── pages/
            │   ├── Bio.vue             # Bio page route (/bio)
            │   ├── index.vue           # Homepage route (/)
            │   └── OurcompanyMenu.vue  # Our company page route (/ourcompanymenu)
            ├── assets/
            │   ├── css/
            │   │   └── main.css        # Global CSS with TailwindCSS imports
            │   └── images/             # Static images (e.g., gifttest.gif background)
            public/                     # Static assets served directly
            ```

            ### Component Architecture

            **Layout Pattern**: The application uses a **component composition pattern** where:

            - `NavBar` handles site navigation using `DropdownMenu` components for sub-menus (Vender, Comprar, Alquilar, Nuestra Empresa, Contacto) and features a responsive slide-in mobile menu.
            - `BodyBar` contains the main hero message and content
            - `FootBar` provides call-to-action buttons for core functions

            **Styling Approach**:

            - **TailwindCSS** for utility classes and responsive design
            - **Scoped styles** in individual Vue components for component-specific styling
            - **Global CSS variables** defined for consistent theming (color-text, color-background, color-accent)
            - **Typography**: Uses serif fonts (Lora, Playfair Display) for elegant real estate aesthetic

            ### Configuration Files

            - `nuxt.config.ts` - Nuxt configuration with TailwindCSS Vite plugin (`@tailwindcss/vite`)
            - `tsconfig.json` - TypeScript configuration using Nuxt's generated configs
            - `package.json` - Dependencies and scripts, specifies pnpm as package manager

            ### Key Features & Business Logic

            - **Real Estate Focus**: Navigation includes real estate sections (Vender, Comprar, Alquilar) and personal bio pages (`Bio.vue`, `OurcompanyMenu.vue`).
            - **Bilingual Content**: Spanish language content suggests Spanish-speaking market
            - **Visual Design**: Uses background images/GIFs with overlay effects for visual appeal
            - **SEO Optimization**: Meta tags and structured head content using Nuxt's `useHead` composable

            ### Development Notes

            - The project uses Nuxt 4's `app/` directory structure (newer than traditional `pages/` at root)
            - Components are organized by feature/page (`home/`, `bio/`) and reusable elements (`Button.vue`, `DropdownMenu.vue`)
            - TypeScript setup follows Nuxt's recommended project references pattern
            - TailwindCSS is configured through Vite plugin (`@tailwindcss/vite`) rather than traditional PostCSS setup
