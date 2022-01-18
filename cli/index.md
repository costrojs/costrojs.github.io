---
id: index
title: Create Costro App
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The easiest way to get started with Costro is to use `create-costro-app`. This CLI tool lets you quickly start creating a new Costro application, with everything set up for you. You can create a new app using the default Costro template or using one of the [official Costro templates](cli#templates). To get started, use the following command:

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

- **100/100 Lighthouse score**: Templates optimized right out of the box ([See the Lighthouse report](/)).
- **Interactive experience**: Running `npx create-costro-app@latest` (with no arguments) launches an interactive experience that guides you through setting up a project.
- **Zero dependencies**: Initializing a project is as quick as one second. Create Costro App has zero dependencies.
- **Ready to use template**: The project contains webpack, Babel, postCSS, ESLint, Prettier, Jest, Browserslist and Autoprefixer.

## CLI options

`create-costro-app` comes with the following options:

```bash
npx create-costro-app [<directory>] [--template <template-name>] [-h | --help] [-v | --version]
```

- `[<directory>]` - Target directory of the application.
- `[--template <template-name>]` - Specify the template name ([see the list of templates](cli#templates)).
- `[-h | --help]` - Show help for commands.
- `[-v | --version]` - Show the `create-costro-app` CLI version.

## Templates

Templates contain everything configured for you and allow you to code instantly.

`create-costro-app` comes with the following templates:

### Default

Name: `default`

[See the template default on GitHub](https://github.com/costrojs/costro-templates/tree/main/templates/default)

### TypeScript

Name: `typescript`

[See the template default on GitHub](https://github.com/costrojs/costro-templates/tree/main/templates/typescript)

## Available scripts

- `npm install`

Install the project dependencies.

- `npm run dev`

Runs the application in development mode. Open `http://localhost:3000` to view it in the browser. The page will reload if you make changes.

- `npm run test`

Run Jest in the interactive watch mode.

- `npm run link`

Run linter with ESLint.

- `npm run build`

Builds the application for production in the `build` folder. It bundles Costro into production mode and optimizes the build for the best performance. The build is minified and filenames include the hashes.
