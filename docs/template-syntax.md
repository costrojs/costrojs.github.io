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

Out of the box, Costro provides the `createElement()` and `Fragment()` functions to transforms JSX syntax into valid DOM elements.

To further optimize the size of the generated file and pay homage to the [hyperscript](https://github.com/hyperhype/hyperscript), short names are available:

- `createElement` => `h`
- `Fragment` => `F`

:::info
Costro is also compatible with the [jsx-dom](https://github.com/proteriax/jsx-dom) package with the [syntaxes](template-syntax#attributes) declared below.
:::

Try it on [CodeSandbox](https://codesandbox.io/s/costro-jsx-template-k5zfs).

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

### Attributes

#### Class

`String`

You can use `class` or `className`.

```jsx
<div class="item"></div>
<div className="item"></div>
```

#### Style

`String|Object`

```jsx
<div style="display: flex; justify-content: center;"></div>
<div style={{ display: 'flex', justifyContent: 'center' }}></div>
```

#### Dataset

`Object`

```jsx
<div dataset={{ firstName: 'John', lastName: 'Doe' }}></div>
```

#### Inner HTML

`String`

```jsx
const html = '<span>Hello</span>'
<div innerHTML={html}></div>
```

#### Boolean attributes

Boolean attributes can be declared without a value or with the value `true`.

```jsx
<button disabled></button>
<button disabled={true}></button>
```

### SVG

Costro applies the SVG attributes as they are written. This means that you can copy and paste unmodified SVG directly into your code and have them work right away.

```mdx-code-block
<BrowserWindow url="http://localhost:3000">
   <svg width="50" height="50" fill="#ff236d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M35.68 352.066C9.827 377.92-2.95 442.594.577 511.41c69.101 3.559 133.59-9.351 159.34-35.105 40.285-40.28 42.87-93.987 6.308-130.55-36.558-36.558-90.265-33.97-130.547 6.311Zm94.956 81.055c-10.73 10.733-37.605 16.111-66.402 14.627-1.465-28.674 3.86-55.623 14.633-66.396 16.781-16.786 39.164-17.864 54.398-2.63 15.23 15.237 14.157 37.616-2.629 54.4ZM51.941 154.484l-49.41 98.813A28.125 28.125 0 0 0 0 264a24.006 24.006 0 0 0 24 24h93.46c23.442-47.412 61.012-123.373 77.891-157.328.52-.914 1-1.768 1.524-2.672H94.82c-16.344.016-35.531 11.875-42.879 26.484Zm329.395 162.088C347.375 333.58 271.273 371.252 224 394.646v93.563A24.124 24.124 0 0 0 247.96 512a28.03 28.03 0 0 0 10.626-2.531l98.726-49.39c14.625-7.313 26.5-26.5 26.5-42.86V315.703c.067-.04.125-.088.188-.129v-.527c-.906.52-1.746 1.002-2.664 1.525Z"/><path d="M505.16 19.516a16.74 16.74 0 0 0-12.535-12.57C460.226 0 434.375 0 409.485 0c-89.15 0-156.677 40.615-212.509 127.818-.558.979-1.07 1.877-1.625 2.854-16.879 33.955-54.449 109.916-77.89 157.328H128a96 96 0 0 1 96 96v10.646c47.273-23.394 123.375-61.066 157.336-78.074l2.789-1.597c87.234-56.06 127.86-123.512 127.86-212.278.077-25.09.144-50.61-6.825-83.181ZM368 192a48 48 0 1 1 48-48.002A48.022 48.022 0 0 1 368 192ZM78.867 381.352c-10.773 10.773-16.098 37.722-14.633 66.396 28.797 1.484 55.672-3.894 66.402-14.627 16.786-16.783 17.86-39.162 2.63-54.398-15.235-15.235-37.618-14.157-54.399 2.629Z"/></g></svg>
</BrowserWindow>
```

<br />

Try it on [CodeSandbox](https://codesandbox.io/s/costro-svg-2ek63).

### Configuration files

#### Babel

To transpile JSX, you need the Babel preset `@babel/preset-react` that converts JSX to valid JavaScript code.

```bash
npm install @babel/preset-react --save-dev
```

Then, update the Babel configuration to register the plugin and the pragmas.

```json title="babel.config.json"
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "costro"
      }
    ]
  ]
}
```

:::info
The automatic runtime automatically adds imports for `costro`. If you prefer the `classic` runtime environment, see the [Babel preset configuration](https://babeljs.io/docs/babel-preset-react#options)
:::

<details>
  <summary>Pragmas with CDN links</summary>

Pragmas are exposed in the global variable `window.Costro.jsx`.

```json title="babel.config.json"
{
  "pragma": "Costro.jsx.h",
  "pragmaFrag": "Costro.jsx.F"
}
```

[Documentation of the `@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)

</details>

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
    "react/react-in-jsx-scope": "off"
  },

  "settings": {
    "react": {
      "version": "0"
    }
  }
}
```
