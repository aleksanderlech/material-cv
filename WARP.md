# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Material CV is a personal portfolio website built with Angular that displays resume information in a modern, responsive design. The application is data-driven, loading CV content from a JSON file and supporting multiple visual themes.

## Common Development Commands

### Development Server
```bash
npm start
```
This starts the development server with proxy configuration and automatically opens the browser.

### Build Commands
```bash
# Development build
ng build

# Production build
ng build --configuration production
```
Build artifacts are stored in `dist/cloud-cv/` directory.

### Testing
```bash
# Run unit tests
ng test

# Run end-to-end tests  
ng e2e

# Run linting
ng lint
```

### Package Management
```bash
# Install dependencies
npm install

# Update Angular CLI and dependencies
ng update
```

## Architecture Overview

### Data-Driven Design
The application follows a data-driven architecture where all CV content is loaded from `src/assets/content/cv.json`. This allows for easy content updates without code changes.

### Component Structure
- **AppComponent**: Main application component that loads CV data via DataService
- **HeaderComponent**: Navigation and profile summary with social links
- **Sectional Components**: Individual CV sections (skills, education, projects, etc.)
- **DataService**: Handles loading CV data from JSON file
- **Resume Model**: TypeScript interfaces defining the data structure

### Key Services
- **DataService**: Singleton service that loads CV data via HTTP GET from assets
- **Resume Model**: Comprehensive TypeScript interfaces for type safety

### Theming System
The application supports multiple themes via SCSS files in `src/assets/css/`:
- 16 predefined themes (theme-1.scss through theme-16.scss)
- Base theme variables in `src/assets/css/theme/_variables.scss`
- Current theme is configured in angular.json styles array

## Content Management

### Updating CV Content
Edit `src/assets/content/cv.json` to update:
- Profile information and contact details
- Education history
- Work experience (projects)
- Initiatives and side projects  
- Testimonials
- Company information

### Adding Images
Place images in `src/assets/images/` and reference them in the CV JSON file.

### Theme Switching
To change the active theme:
1. Modify the styles array in `angular.json`
2. Replace the theme import (currently `src/assets/css/theme-1.scss`)

## Technical Details

### Module Structure
- **AppModule**: Main application module with component declarations
- **ProjectsModule**: Separate module for projects/experience components
- **InitiativesModule**: Separate module for initiatives components
- **ServicesModule**: Contains data services and models

### External Dependencies
- jQuery-based plugins for animations and interactions
- Bootstrap for responsive layout
- Font Awesome for social media icons
- Various jQuery plugins (flexslider, isotope, etc.)

### Development Proxy
The proxy.conf.json redirects `/assets/*` requests during development to handle static file serving.

## Build Configuration

### Angular Configuration
- Project name in angular.json: "cloud-cv"
- Output directory: `dist/cloud-cv/`
- Uses SCSS preprocessing with include paths
- Includes multiple JavaScript libraries and plugins

### TypeScript Configuration
- Target: ES2022
- Experimental decorators enabled
- Module resolution: bundler
- Source maps enabled for development

## File Structure Conventions

### Components
- Each component has its own directory with .ts, .html, and .scss files
- Components use the 'cv-' prefix for selectors (e.g., cv-header)
- Standalone components are disabled (using traditional Angular modules)

### Services
- Located in `src/app/services/`
- Use providedIn: 'root' for singleton services
- Models are defined as TypeScript interfaces

### Assets
- Content: JSON data files in `src/assets/content/`
- Styles: Theme files in `src/assets/css/`
- Scripts: Third-party JavaScript libraries in `src/assets/plugins/`