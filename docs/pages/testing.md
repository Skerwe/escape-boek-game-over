# Testing

## Unit Testing

:link: [Vue Test Utils](https://test-utils.vuejs.org/)

The application data is stored with [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and wile
 testing a [fake-indexeddb](https://github.com/dumbmatter/fakeIndexedDB) is used to run tests against.

Run the command `npm run test:unit` to execute the unit test.

## End2End Testing

:link: [Cypress](https://www.cypress.io/)

Even with Cypress in the _package.json_ dev dependencies, it seems you still need to run `npm install cypress --save-dev`
 youself just once to get the Cypress environment install on you machine.

Run the command `npm run test:e2e` to start the Cypress dashboard.

## Linting

The documentation for the project, what you are ready here now, was created with [docsify](https://docsify.js.org/#/)
  in the [Markdown](https://daringfireball.net/projects/markdown/) format.

Markdown linting was configured to make sure all documentation follows good quality standards:

- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)

The configuration can be found in the `.markdownlint.json` file.

Run the command `npm run lint` to execute the linting on the application source files.  
Run the command `npm run lint:docs` to execute the linting on all document files (_.md files_).
