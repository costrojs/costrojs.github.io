---
id: index
title: Create Costro App
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The easiest way to get started with Costro is to use [`create-costro-app`](https://github.com/costrojs/create-costro-app). This CLI tool lets you quickly start creating a new Costro application, with everything set up for you. You can create a new app using the default Costro template or using one of the [official Costro templates](cli#templates).

To create a new app, use the following command:

<Tabs
defaultValue="npx"
values={[
{ label: 'npx', value: 'npx', },
{ label: 'npm', value: 'npm', },
{ label: 'yarn', value: 'yarn', }
]
}>
<TabItem value="npx">

```bash
npx create-costro-app my-app
```

:::info
`npx` is available in npm 5.2+.
:::

</TabItem>
<TabItem value="npm">

```bash
npm init costro-app my-app
```

:::info
`npm init <initializer>` is available in npm 6+.
:::

</TabItem>
<TabItem value="yarn">

```bash
yarn create costro-app my-app
```

:::info
`yarn create` is available in yarn 0.25+.
:::

</TabItem>
</Tabs>

## Features

`create-costro-app` lets you create a new Costro app in seconds. It comes with the following features out of the box:

- **Interactive experience**: Running `npx create-costro-app` launches an interactive experience that guides you through setting up a project.
- **100/100 Lighthouse score**: Templates optimized right out of the box ([Lighthouse report](https://googlechrome.github.io/lighthouse/viewer?gist=2623d9bb018f1b7bb5fc58adb66d4d69)).
- **No dependencies**: `create-costro-app` has no dependencies.
- **Ready-to-use template**: The project contains [webpack](https://webpack.js.org), [Babel](https://babeljs.io), [postCSS](https://postcss.org), [ESLint](https://eslint.org), [Prettier](https://prettier.io), [Jest](https://jestjs.io) and [Browserslist](https://github.com/browserslist/browserslist).
- **TypeScript support**: `create-costro-app` provides a [TypeScript template](#templates).

## CLI options

`create-costro-app` comes with the following options:

```txt
Usage: create-costro-app [options] [directory]

Arguments:
  directory              Custom target directory

Options:
  -t, --template <name>  Specify the template name
  -v, --version          Show the Create Costro App version
  -h, --help             Display help for command
```

## Templates

Templates contain everything set up for you and allow you to code instantly. `create-costro-app` comes with the following templates:

| Template name                                                                             | Description                                                                  |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [default](https://github.com/costrojs/costro-templates/tree/main/templates/default)       | webpack, Babel, postCSS, ESLint, Prettier, Jest and Browserslist             |
| [typescript](https://github.com/costrojs/costro-templates/tree/main/templates/typescript) | TypeScript, webpack, Babel, postCSS, ESLint, Prettier, Jest and Browserslist |

## Available scripts

### `npm install`

Install the project dependencies.

### `npm run dev`

Runs the application in development mode. Open `http://localhost:3000` to view it in the browser. The page will reload if you make changes.

### `npm run test`

Run Jest in the interactive watch mode.

### `npm run lint`

Run linter with ESLint.

### `npm run build`

Builds the application for production in the `build` folder. It bundles Costro into production mode and optimizes the build for the best performance. The build is minified and filenames include the hashes.

## Browserslist

By default, project templates include a [`browserslist`](https://github.com/browserslist/browserslist) configuration in your `package.json` with production and development support. Update it as needed.

Here is an example of `browserslist` that is specified in the `package.json`:

<!-- prettier-ignore -->
```json
"browserslist": {
  "production": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```
