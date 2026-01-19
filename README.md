# Good Impressions Website Redesign

A modern, visually stunning redesign of the Good Impressions marketing agency website.

## Features

- **Bold Typography**: Uses Playfair Display for headlines and DM Sans for body text
- **Warm Color Palette**: Terracotta, sage, ochre with cream backgrounds
- **Smooth Animations**: Powered by Framer Motion for scroll-triggered reveals
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: React 18 + Vite + Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main application with all components
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Design Highlights

- **Hero Section**: Animated headline with floating decorative circles
- **Services Grid**: Dark section with hover effects and icons
- **Results Cards**: Metric-focused cards with lift animation
- **Approach Section**: Sticky header with numbered principles
- **Testimonials**: Auto-rotating carousel with smooth transitions
- **Contact Form**: Clean form with focus states

