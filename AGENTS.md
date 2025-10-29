# AGENTS.md

This file provides guidelines for agentic coding agents working in this React repository.

## Directory Structure
- Run commands from `/home/tcon/TylerRest/tyler.rest/`
- Source code in `src/`
- Public assets in `public/`

## Build/Lint/Test Commands
- Build: `npm run build` - Creates production build in `build/`
- Lint: `npx eslint src/` - Checks code style with ESLint (extends react-app)
- Test: `npm test` - Runs Jest tests in watch mode
- Single test: `npm test App.test.js` - Runs tests in specific file
- Single test by name: `npm test -- --testNamePattern=MyTest` - Runs matching test
- Start dev server: `npm start` - Runs development server on localhost:3000

## Code Style Guidelines
- Language: JavaScript (ES6+), no TypeScript
- Components: Functional components preferred; use hooks for state/effects
- Naming: camelCase for variables/functions, PascalCase for components/files
- Imports: Use named imports for React; relative paths for local modules (e.g., `import App from './App';`)
- Formatting: 2-space indentation; single quotes for strings; semicolons
- JSX: Use `className` for CSS classes; self-closing tags for void elements
- CSS: Plain CSS in .css files; modular per component (e.g., App.css)
- Error Handling: Use try-catch for async operations; console.error for logging
- Conventions: Follow Airbnb style via ESLint; no inline styles unless necessary
- No additional rules from .cursor/rules/ or .github/copilot-instructions.md

## Best Practices
- Mimic existing patterns: Array mapping for lists, CSS animations for effects
- Verify changes: Run lint and tests after edits
- Security: Avoid hardcoding secrets; use environment variables if needed

(18 lines of content)