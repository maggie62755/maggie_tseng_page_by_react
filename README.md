# Maggie Tseng Personal Website

This is my personal website and React practice project, built with React, TypeScript, and Vite.
[link](https://maggie62755.github.io/maggie_tseng_page_by_react/)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## Getting Started

Follow these steps to get the project running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/maggie62755/maggie_tseng_page_by_react.git
cd maggie_tseng_page_by_react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will start and be available at `http://localhost:5173` (or another port if 5173 is occupied).

## Available Scripts

In the project directory, you can run:

### `npm run dev`
- Starts the development server
- Opens the app in development mode
- Hot reload is enabled - the page will reload when you make changes

### `npm run build`
- Builds the app for production
- Compiles TypeScript and creates an optimized build in the `dist` folder

### `npm run preview`
- Serves the production build locally
- Useful for testing the production build before deployment

### `npm run lint`
- Runs ESLint to check for code quality issues
- Helps maintain consistent code style

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library
- **ESLint** - Code linting

## Project Structure

```
maggie_tseng_page_by_react/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Page components
│   └── ...
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── README.md        # This file
```

## Deployment

To deploy this project:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## Development Notes

- This project uses Vite for fast development and building
- TypeScript is configured for type safety
- ESLint is set up for code quality
- Hot Module Replacement (HMR) is enabled for fast development

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Made with ❤️ by Maggie Tseng
