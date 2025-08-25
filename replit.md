# replit.md

## Overview

This is a modern full-stack web application built as a personal portfolio website showcasing a developer's projects, experience, and skills. The application demonstrates a complete professional web presence with interactive sections for about, experience, projects, skills, achievements, and contact information. It's designed to serve as both a portfolio showcase and a demonstration of full-stack development capabilities using modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, following a component-based architecture. The application uses React Router (wouter) for client-side navigation and TanStack Query for state management and data fetching. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements. Tailwind CSS handles all styling with a custom design system that includes CSS variables for theming and consistent spacing/typography.

### Component Structure
The application follows a modular component architecture with clear separation of concerns:
- **Page Components**: Main route components (Home, NotFound)
- **Section Components**: Individual portfolio sections (Hero, About, Experience, Projects, Skills, Achievements, Contact)
- **UI Components**: Reusable shadcn/ui components for consistent design patterns
- **Layout Components**: Navigation and Footer for site-wide elements

### Backend Architecture
The backend uses Express.js with TypeScript in a minimal setup designed for extensibility. The server implements middleware for request logging, error handling, and development tooling. The architecture includes an abstraction layer for data storage through an IStorage interface, currently implemented with in-memory storage but designed to easily switch to database implementations.

### Database Design
The application includes Drizzle ORM configuration for PostgreSQL with a users table schema defined in the shared directory. The schema uses Drizzle-Zod for type-safe validation and includes proper TypeScript inference. The storage layer implements CRUD operations through a clean interface that can be extended for additional entities.

### Development Environment
The application uses Vite for development with Hot Module Replacement (HMR) and specialized Replit integrations. The build system is configured for both development and production environments with separate TypeScript compilation for client and server code. ESBuild handles server-side bundling for production deployment.

### Styling System
The styling architecture centers around Tailwind CSS with extensive customization through CSS variables. The design system includes:
- Custom color palette with semantic naming
- Consistent spacing and typography scales
- Component variants using class-variance-authority
- Dark mode support through CSS variables
- Responsive design patterns

### Type Safety
The application maintains end-to-end type safety through:
- Shared TypeScript types between client and server
- Drizzle ORM type inference for database operations
- Zod schemas for runtime validation
- React Hook Form with resolver integration

## External Dependencies

### UI Framework & Components
- **React 18**: Core frontend framework with hooks and modern patterns
- **shadcn/ui**: Complete UI component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI patterns
- **Lucide React**: Icon library for consistent iconography

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **PostCSS**: CSS preprocessing with Autoprefixer
- **class-variance-authority**: Type-safe component variant management
- **clsx**: Conditional className utilities

### State Management & Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **wouter**: Lightweight client-side routing

### Backend & Database
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Vite**: Build tool with fast development server and HMR
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution environment for development

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **nanoid**: URL-safe unique ID generator
- **zod**: Runtime type validation and schema definition