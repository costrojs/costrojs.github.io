---
id: application
title: Application
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- markdownlint-disable MD041 -->

## Create the application instance

Every Costro application starts by creating a new application instance with the `App` class:

```js
import { App } from 'costro';

const app = new App({
  target: document.querySelector('#app'),
  routes: [
    {
      path: '/',
      component: () => '<h2>Home</h2>'
    }
  ]
});
```

:::info
With CDN links, `Application` is exposed in the global variable `window.Costro`.

```js
const app = new Costro.Application();
```

:::

Try it on [CodeSandbox](https://codesandbox.io/s/costro-application-instance-u1gqx).

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
| routes    | `RouteConfig[]` | Route definition. list                         |
| mode      |    `string`     | Router mode (`hash\|history`). Default `hash`. |
