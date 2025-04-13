# Blinkit Dashboard

A modern dashboard application built with Next.js for monitoring and visualizing Blinkit data and performance metrics.

## Features

- **Interactive Dashboard**: Comprehensive overview with key metrics and analytics
- **Data Visualization**: 
  - Line charts for trend analysis
  - Pie charts for data distribution
  - Dynamic data tables with sorting capabilities
- **Responsive Layout**:
  - Sidebar navigation
  - Top navigation bar
  - Mobile-friendly design
- **Component Architecture**:
  - Modular and reusable components
  - Type-safe implementation with TypeScript

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom-built React components
- **State Management**: React Hooks
- **Icons**: SVG and PNG assets

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font for optimal typography.

## Project Structure

```
app/
├── components/
│   ├── Charts/         # Chart components
│   ├── Dashboard/      # Dashboard layout and components
│   ├── Sidebar/        # Navigation sidebar
│   ├── TableView/      # Data table components
│   └── TopNav/         # Top navigation bar
├── layout.tsx          # Root layout
└── page.tsx           # Home page
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
