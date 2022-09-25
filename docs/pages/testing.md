# Testing

## Unit Testing

The application data is stored with [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and wile
 testing a [fake-indexeddb](https://github.com/dumbmatter/fakeIndexedDB) is used to run tests against.

## End2End Testing

Even with Cypress in the _package.json_ dev dependencies, it seems you still need to run `npm install cypress --save-dev`

## Linting

The documentation for the project, like what you are ready here now, was created with [docsify](https://docsify.js.org/#/)
  in the [Markdown](https://daringfireball.net/projects/markdown/) format.

Markdown linting was configured to make sure all documentation follows good quality standards:

- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)

The configuration can be found in the `.markdownlint.json` file.
