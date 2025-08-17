# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0]

### Added

- This CHANGELOG.md file.
- Added a code coverage command.

### Removed

- Replaced `i18next` with `vue-i18n`.

### Changed

- Upgrade Vite and Vitest to use JS modules (MJS) and not CJS.
- Upgraded ESLint and configured linting to lint with Vue, Cypress and Prettier.
- Configured the targeted version of Android to version 35.

### Security

- Ran `npm audit fix`.
- Updated development dependencies.

## [1.1.0]

### Changed

- Configured the targeted version of Android to version 34.
- Updated Cordova dependency from gitHub to use version 13 (DEV).

### Security

- Updated development dependencies.

## [1.0.0]

### Added

- Created the Inventory and the About page.
- Implemented current location tracker component.
- English and Dutch translation with `i18next`.
