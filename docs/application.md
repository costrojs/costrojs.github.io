---
id: application
title: Application
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
  basePath: string
  silentOnNotFound: boolean
};

type RouteConfig = {
  path: string
  component: Component
  props: any
};
```

**Parameters**

| Parameter        |      Type       | Default | Description                                                                                                                                                                         |
| ---------------- | :-------------: | :-----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target           |  `HTMLElement`  |   `-`   | Unique `HTMLElement` to build the application.                                                                                                                                      |
| routes           | `RouteConfig[]` |   `-`   | [Route definition list](router#define-routes).                                                                                                                                      |
| mode             |    `string`     | `hash`  | [Router mode](router#history-mode) with `hash` or `history`.                                                                                                                        |
| basePath         |    `string`     |   `/`   | The base URL of the app. For example, if the entire single page application is served under `/app/`, then `basePath` should use the value `/app`.                                   |
| silentOnNotFound |    `Boolean`    | `false` | Tells the router to ignore unknown route changes and not delete the currently displayed route. If a [not found route](router#not-found-route) is declared, it will also be ignored. |

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
