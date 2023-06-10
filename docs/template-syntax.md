---
id: template-syntax
title: Template syntax
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
```

Costro's component templates can be written in native Template String or with JSX. When building large scale applications with Costro, JSX is recommended because it provides more readable templates and offers more flexibility than native Template Strings.

## Template String

The Template String is the easiest way to define the template of a component. The component can be a [Function or a Class Component](component#function-and-class-components).

<Tabs
groupId="function-class-component"
defaultValue="function-component"
values={[
{ label: 'Function Component', value: 'function-component', },
{ label: 'Class Component', value: 'class-component', }
]
}>
<TabItem value="function-component">

```js title="src/components/home.js"
function Home() {
  return `<h2>Home</h2>`;
}
```

</TabItem>
<TabItem value="class-component">

```js title="src/components/home.js"
class Home extends Component {
  render() {
    return `<h2>Home</h2>`;
  }
}
```

</TabItem>
</Tabs>

Try it on [CodeSandbox](https://codesandbox.io/s/costro-template-string-kyjl1).

## JSX ⚡

Costro jsx relies on [jsx-dom](https://github.com/alex-kinokon/jsx-dom) to transforms JSX syntax into valid DOM elements.

Try it on [CodeSandbox](https://codesandbox.io/s/costro-jsx-template-k5zfs).

### Installation

<Tabs
defaultValue="npm"
values={[
{ label: 'npm', value: 'npm', },
{ label: 'yarn', value: 'yarn', }
]
}>
<TabItem value="npm">

```bash
npm install jsx-dom
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add jsx-dom
```

</TabItem>
</Tabs>

:::info
`jsx-dom` is ESM only, for CommonJS support, use `jsx-dom-cjs` instead.
:::

**Import**

Import the `jsx-dom` file when using JSX in templates.

```jsx
import { createElement, Fragment } from 'jsx-dom';
```

<Tabs
groupId="function-class-component"
defaultValue="function-component"
values={[
{ label: 'Function Component', value: 'function-component', },
{ label: 'Class Component', value: 'class-component', }
]
}>
<TabItem value="function-component">

```jsx title="src/components/home.js"
function Home() {
  return <h2>Home</h2>;
}
```

</TabItem>
<TabItem value="class-component">

```jsx title="src/components/home.js"
class Home extends Component {
  render() {
    return <h2>Home</h2>;
  }
}
```

</TabItem>
</Tabs>

### Fragments

```jsx title="src/components/home.js"
class Home extends Component {
  render() {
    return (
      <>
        <h2>Home</h2>
        <p>Fragment</p>
      </>
    );
  }
}
```

### Configuration files

#### Babel

To transpile JSX, you need the Babel preset `@babel/preset-react` that converts JSX to valid JavaScript code.

```bash
npm install @babel/preset-react --save-dev
```

Then, update the Babel configuration to register the preset.

```json title="babel.config.json"
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "jsx-dom" // ESM
        // "importSource": "jsx-dom-cjs" // CommonJS
      }
    ]
  ]
}
```

:::info
The automatic runtime automatically adds imports for `jsx-dom`. If you prefer the `classic` runtime environment, see the [Babel preset configuration](https://babeljs.io/docs/babel-preset-react#options)
:::

#### ESLint

ESLint provide support for JSX syntax with the `eslint-plugin-react` package.

```bash
npm install eslint@7 eslint-plugin-react --save-dev
```

When using ESLint and JSX outside of React/Preact, you needs to update the following rules.

```json title=".eslintrc.json"
{
  "extends": ["plugin:react/recommended"],

  "rules": {
    "react/display-name": 0,
    "react/jsx-key": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off"
  },

  "settings": {
    "react": {
      "version": "0"
    }
  }
}
```

<details>
  <summary>ESLint with Babel `classic` runtime</summary>

```json title=".eslintrc.json"
{
  "extends": ["plugin:react/recommended"],

  "rules": {
    "react/display-name": 0,
    "react/jsx-key": 0,
    "react/prop-types": 0
  },

  "settings": {
    "react": {
      "pragma": "createElement",
      "fragment": "Fragment",
      "version": "0"
    }
  }
}
```

</details>
