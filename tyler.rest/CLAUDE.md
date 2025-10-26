# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application bootstrapped with Create React App. It's a standard CRA setup using React 19.2.0.

## Development Commands

### Running the Development Server
```bash
npm start
```
Starts the development server at http://localhost:3000 with hot module reloading.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Running Tests
```bash
npm test
```
Launches the test runner in interactive watch mode using Jest and React Testing Library.

To run tests for a specific file:
```bash
npm test -- <filename>
```

## Project Structure

- `src/` - Application source code
  - `App.js` - Main application component
  - `index.js` - Application entry point (renders App into DOM)
  - `*.test.js` - Test files using React Testing Library
  - `setupTests.js` - Test configuration
- `public/` - Static assets served directly (favicon, manifest, index.html)

## Testing

This project uses:
- **Jest** as the test runner (configured via react-scripts)
- **React Testing Library** (@testing-library/react, @testing-library/dom, @testing-library/jest-dom)
- **@testing-library/user-event** for simulating user interactions

Test files should be named `*.test.js` and placed alongside the components they test.

## Build Configuration

The project uses `react-scripts` which abstracts webpack, Babel, and ESLint configuration. To access the underlying configuration, you would need to run `npm run eject` (one-way operation, not recommended unless necessary).

ESLint is configured to extend `react-app` and `react-app/jest` presets.
