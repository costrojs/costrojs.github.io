---
id: application
title: Application
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Now that you have [created your components](component.md) and [associated them with routes](router.md), you can create the application instance by passing the routes to it.

## Create the application instance

Create the application instance with the `App` class and pass the routes configuration.

**Signature**

<!-- prettier-ignore -->
```ts
export declare class App {
  constructor(options: Options)
}

type Options = {
  target: HTMLElement
  routes: RouteConfig[]
  mode: string
};

type RouteConfig = {
  path: string
  component: Component
  props: any
};
```

**Parameters**

| Parameter |      Type       | Description                                    |
| --------- | :-------------: | ---------------------------------------------- |
| target    |  `HTMLElement`  | Unique `HTMLElement` to build the application. |
| routes    | `RouteConfig[]` | [Route definition list](router#define-routes). |
| mode      |    `string`     | Router mode (`hash\|history`). Default `hash`. |

**Example**

```js title="src/app.js"
import { App } from 'costro';
import Home from 'src/components/home';
import About from 'src/components/about';

const app = new App({
  target: document.querySelector('#app'),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
});
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-x8j4f).

<details>
  <summary>Import `App` with CDN links</summary>

`Application` is exposed in the global variable `window.Costro`.

```js
const app = new Costro.Application();
```

</details>
