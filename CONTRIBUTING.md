# Contributing to costro.js.org

Thanks for being interesting on Costro! Before submitting your contribution, be sure to take a moment and read the following guide.

- [How to contribute to Open Source](https://opensource.guide/how-to-contribute)
- [Building welcoming communities](https://opensource.guide/building-community)

This site is built with [Docusaurus](https://docusaurus.io). The content of the site is written in Markdown format. Pull requests are welcome.

## Installation

1. Make sure that [Node.js](https://nodejs.org) **version 12+** and npm are installed.
2. After cloning the repository, run `npm install` at the root of the repository.
3. To start the development server, run `npm start`.

List of npm scripts available:

**Development**

```bash
# Run development server
npm run start
```

**Tests**

```bash
# Run Markdown linter
npm run test:markdown
```

**Production**

```bash
# Build the source code for distribution
npm run build
```

## Pull requests

You can learn how to work on your first pull request from this series of free video: [How to contribute to an open source project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Keep the pull requests as small as possible, it's much easier to review. Make sure the PR only does one thing, otherwise please split it.

Make sure the following is done when submitting a pull request:

1. Fork [the repository](https://github.com/costrojs/costrojs.github.io) and create your branch from `main`.
2. Make sure test passes, run `npm run test`.

## Project structure

- `./config` - Contains configuration files (Prettier).
- `./docs` - Contains the Markdown files for the [Docs](https://costro.js.org/docs/installation) section.
- `./sidebar` - Contains the sidebar configuration files.
- `./src` - Contains the custom code for MDX, JSX and the home page.
- `./static` - Contains static files. All files are automatically moved to the root directory during build.
- `./tutorial` - Contains the Markdown files for the [Tutorial](https://costro.js.org/tutorial) section.

## License

By contributing to Costro, you agree that your contributions will be licensed under its [MIT license](https://github.com/costrojs/costrojs.github.io/blob/main/LICENSE).
