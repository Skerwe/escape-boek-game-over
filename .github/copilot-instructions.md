# Copilot / AI agent instructions — Escape Boek - Game Over Inventory Companion

Short goal: help contributors develop, test, and maintain the Cordova-based mobile inventory companion app for the choose-your-own-adventure book, while keeping documentation high-quality.

Key facts (read before editing)
- This repository is a Cordova hybrid mobile application for Android, serving as an inventory tracker for the "Escape Boek - Game Over" children's book.
- Primary developer commands live in `package.json`:
  - `npm install` — install dependencies
  - `npm run dev` (or similar via Vite) — development build
  - `cordova build android` — build for Android
  - `cordova run android` — deploy and run on connected device/emulator
- Testing: Uses Cypress for e2e tests (`cypress.config.js`), run with `npx cypress run`
- CI: GitHub Actions workflow for pages deployment (likely for web version or docs)

Where content lives
- Source code: `src/` folder (main application code)
- Tests: `cypress/` for e2e tests
- Build output: `build/` and `www/` for web assets, `platforms/android/` for Android build
- Documentation: `README.md` at root, any additional docs in `docs/` if present
- Configuration: `package.json`, `vite.config.js`, `config.xml` (Cordova config)

Common agent tasks and examples
- Preview the web version locally: ensure dependencies installed, then run Vite dev server (check `package.json` scripts)
- Build for Android: `cordova build android` (requires Android SDK, Java, Gradle)
- Run on device: `cordova run android` (ensure device connected or emulator running)
- Run tests: `npx cypress run` for e2e tests
- Lint code: Check if ESLint is configured (`eslint.config.js` present)

Project-specific conventions
- Use ES6+ JavaScript with modern features (async/await, arrow functions)
- Follow camelCase for variables/functions, PascalCase for components/classes
- Ensure mobile-first responsive design
- Use localStorage or Cordova storage plugins for data persistence
- Keep UI simple and child-friendly for the target audience
- Use relative paths in code, absolute for Cordova assets if needed
- No specific markdownlint config — use default rules if linting markdown

Integration points & developer workflows
- CI badge in `README.md` references GitHub Actions for pages deployment
- Hosting: Intended for GitHub Pages (web version) and Google Play (Android APK)
- Cordova plugins: Check `config.xml` for device access plugins (storage, etc.)
- Testing: Cypress for e2e, ensure tests cover inventory and progress features

Files to inspect when making a change
- `package.json` — npm scripts and dependencies
- `config.xml` — Cordova configuration and plugins
- `vite.config.js` — build configuration
- `src/` — main application code
- `README.md` — setup and usage instructions
- `cypress/` — test files

Behavior expectations for small edits
- For code fixes (bugs, improvements): edit in `src/`, test with `cordova run android`, run Cypress tests
- For UI changes: ensure mobile responsiveness, test on various screen sizes
- For documentation: update `README.md`, use clear markdown formatting

If you need to change tools or build process
- Update `package.json` scripts and dependencies
- Modify `vite.config.js` or `config.xml` for Cordova changes
- Document changes in `README.md`

When in doubt, reference these examples in the repo
- `package.json` — shows build and run scripts
- `src/` — example code structure
- `README.md` — project overview and setup

Questions for the repo owner
- Should the project include markdownlint for documentation quality?
- Is there a preferred testing setup beyond Cypress?
- Any specific Cordova plugins or Android permissions to prioritize?

If any of the above is unclear, ask for the specific file or workflow to check and I will update these instructions.
