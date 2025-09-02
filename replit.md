# Overview

This is a Business CRM (Customer Relationship Management) application built as a full-stack web application. The system helps small businesses manage customer relationships, track sales deals, organize tasks, and monitor business activities. It features a modern React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.
Application language: Polish (all interface elements, labels, messages, and text translated to Polish).

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for client-side routing (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod schema validation
- **Component Structure**: Organized into pages, components (layout, modals, feature-specific), and reusable UI components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Database Integration**: Drizzle ORM for type-safe database operations
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware
- **Development Setup**: Hot reload with Vite middleware integration

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for schema definition and migrations
- **Schema Structure**: Four main entities - customers, deals, tasks, and activities
- **Relationships**: Foreign key relationships between customers/deals, customers/tasks, and tracking activities across all entities
- **Data Validation**: Zod schemas shared between frontend and backend for consistent validation

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Express session configuration present but not actively used
- **Security**: Basic CORS and request logging, no role-based access control

## API Structure
- **Dashboard Metrics**: Aggregated business statistics endpoint
- **CRUD Operations**: Full create, read, update, delete operations for customers, deals, tasks, and activities
- **Relational Queries**: Endpoints that return entities with their related data (e.g., customers with deals)
- **Error Responses**: Consistent JSON error format with appropriate HTTP status codes

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: Database migration and schema management tools

## Frontend UI Dependencies
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating type-safe component variants
- **wouter**: Minimalist routing library for React

## Backend Dependencies
- **express**: Web application framework for Node.js
- **zod**: TypeScript-first schema validation library
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **date-fns**: Date utility library for formatting and manipulation

## Development Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript/TypeScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

## Database Integration
- **PostgreSQL**: Primary database system accessed through Neon serverless platform
- **Drizzle Schema**: Type-safe database schema with automatic TypeScript type generation
- **Migration System**: Drizzle Kit for managing database schema changes and migrations