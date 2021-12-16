---
id: router
title: Router
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Define routes

Route are defined in an array of route object. Each route should map to a component.

**Signature**

<!-- prettier-ignore -->
```ts
type RouteConfig = {
  path: string
  component: Component
  props: any
};
```

**Example**

```js title="src/app.js" {6,7,10,11}
import Home from 'src/components/home';
import About from 'src/components/about';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];
```

## Route props

Inject props in the route. Then, props are exposed in the [component props](component#props).

```js title="src/app.js" {7,8,9}
const app = new App({
  target: document.querySelector('#app'),
  routes: [
    {
      path: '/',
      component: Home,
      props: {
        name: 'John Doe'
      }
    }
  ]
});
```

## Dynamic routing

Dynamic routes can be achieved by dynamic segments declared in the `path` of the route. Dynamic segments start with a colon. You can have multiple segments in the same route, and they will mapped to the corresponding fields on `this.route.params` in the component class.

In addition to `this.route.params`, the `this.route` object also exposes other useful information such as `this.route.path` (current path in URL). You can see all the details in the [Component reference](component#Component-route-data).

```js
const routes = [
  {
    path: '/person/:id',
    component: Home
  }
];
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-dynamic-segments-3q8up).

## Not found route

If no route path matches, the active component is automatically destroyed. To display a template instead, declare a component **without** the `path` in the route configuration passed to the app instance.

```jsx
function NotFound() {
  return <h2>Not found</h2>;
}

const routes = [
  {
    component: NotFound
  }
];
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-not-found-g2quw).

## Navigation

### Link

We use the `<Link>` custom component to create links that match route path in the template. This allows the router to change the url without reloading the page.

**Import**

```js
import { Link } from 'costro';
```

<details>
  <summary>Import `Link` with CDN links</summary>

`Link` is exposed in the global variable `window.Costro`.

<Tabs
groupId="link-cdn"
defaultValue="jsx"
values={[
{ label: 'JSX', value: 'jsx', },
{ label: 'Template String', value: 'template-string', }
]
}>
<TabItem value="jsx">

```jsx
<Costro.Link></Costro.Link>
```

</TabItem>
<TabItem value="template-string">

```js
`${Costro.Link()}`;
```

</TabItem>
</Tabs>
</details>

**Signature**

<!-- prettier-ignore -->
```ts
export declare function Link(options: Options, isHtml: boolean): HTMLElement | string;

type Options = {
  to: string
  children: any[]
  attrs: {
    [key: string]: string
  }
};
```

**Parameters**

| Parameter        |           Type            | Description                      |
| ---------------- | :-----------------------: | -------------------------------- |
| options.to       |         `String`          | Route path                       |
| options.children | `(HTMLElement\|String)[]` | The children of the element      |
| options.attrs    |        `...Object`        | The attributes of the element    |
| isHtml           |         `Boolean`         | The function is called from HTML |

**Return**

The output generated as an `HTMLElement` for JSX or a `string` for HTML.

**Example**

<Tabs
groupId="link-jsx"
defaultValue="jsx"
values={[
{ label: 'JSX', value: 'jsx', },
{ label: 'Template String', value: 'template-string', },
{ label: 'HTML', value: 'html', }
]
}>
<TabItem value="jsx">

```jsx
<Link to="/about">About</Link>
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-jsx-template-k5zfs).

</TabItem>
<TabItem value="template-string">

```js
`${Link(
  {
    to: '/about',
    children: ['About']
  },
  true
)}`;
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-template-string-kyjl1).

</TabItem>
<TabItem value="html">

```html
<a href="/about">About</a>
```

</TabItem>
</Tabs>

:::tip
Links can have any valid HTML attribute and children as text or `Node` elements.
:::

### Navigate

We use the `navigate` function to trigger navigation changes. It can be used with event handling or anywhere in component.

**Import**

```jsx
import { navigate } from 'costro';
```

<details>
  <summary>Import `navigate` with CDN links</summary>

`navigate` is exposed in the global variable `window.Costro`.

```js
Costro.navigate();
```

</details>

**Signature**

```ts
navigate(to: string): void;
```

**Example**

```jsx title="src/components/home.js" {3}
class Home extends Component {
  render() {
    return <button onClick={() => navigate('/about')}>About</button>;
  }
}
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-navigate-jys37).

## History mode

The router's default mode is `hash` mode. It uses URL hash to perform URL navigation without reloading the page, e.g. `https://example.com/#/about`.

To not use hash, we can use the router's `history` mode, based on the `history.pushState` API to perform the same behavior, e.g. `https://example.com/about`.

```js
const app = new App({
  mode: 'history',
  target: document.querySelector('#app'),
  routes: []
});
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-history-yd79x).

:::info
When using `history` mode, you need to add a fallback route to your server. If the URL does not match any static element, it must serve the same `index.html` page that your application resides on.
:::

### Server configurations

The following examples assume you are serving your app from the root folder. If you are deploying to a subfolder, you need to adjust the examples below to use the subfolder path instead of the root folder path (e.g. for Apache, replace `RewriteBase /` with `RewriteBase /subfolder-path/`).

#### Apache

```ini
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### nginx

```ìnit
location / {
  try_files $uri $uri/ /index.html;
}
```
