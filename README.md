# Assetable AI - Frontend

A modern, multi-page frontend application for Assetable AI - an AI-powered asset tokenization platform for gold, silver, and other commodities.

## Features

- 🏠 **Home Page** - Hero section with key features and problem/solution overview
- 💡 **Solution Page** - Detailed explanation of the platform's solution and benefits
- ⚙️ **Features Page** - AI Stack, Compliance & Security Controls, and Technical Architecture
- 📋 **Use Cases Page** - Retail users and bank partner use cases
- 📞 **Contact Page** - Contact form and contact information

## Tech Stack

- **Next.js 14** - React framework with built-in routing
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── pages/              # Next.js pages (routes)
│   ├── index.tsx      # Home page
│   ├── solution.tsx   # Solution page
│   ├── features.tsx   # Features page
│   ├── use-cases.tsx  # Use cases page
│   └── contact.tsx    # Contact page
├── components/         # Reusable React components
│   ├── Layout.tsx     # Main layout wrapper
│   ├── Navigation.tsx # Navigation bar
│   └── Footer.tsx     # Footer component
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS imports
└── public/            # Static assets
```

## Pages Overview

1. **Home (/)** - Landing page with hero, features, and problem/opportunity sections
2. **Solution (/solution)** - Detailed solution explanation with lifecycle information
3. **Features (/features)** - AI capabilities, compliance, and technical architecture
4. **Use Cases (/use-cases)** - User journeys for retail users and bank partners
5. **Contact (/contact)** - Contact form and contact information

## Customization

- Colors can be customized in `tailwind.config.js`
- Layout components can be modified in `components/` directory
- Page content can be updated in respective files in `pages/` directory

## License

This project is private and proprietary.
