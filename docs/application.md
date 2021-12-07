---
id: application
title: Application
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
```

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

```mdx-code-block
<BrowserWindow url="http://localhost:3000/#/">
    <h2>Home</h2>
</BrowserWindow>
```

<br />

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
