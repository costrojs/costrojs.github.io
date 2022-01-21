---
id: installation
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Costro can be integrated into a project in several ways depending on the needs.

- Import it as a CDN package on the page
- Download the JavaScript files and host them yourself
- Install it using npm

## CDN

You can use Costro via the CDN links and a `<script>` tag.

```html
<script src="https://cdn.jsdelivr.net/npm/costro" crossorigin></script>
```

You can browse the source of the NPM package at [cdn.jsdelivr.net/npm/costro/](https://cdn.jsdelivr.net/npm/costro/).

:::info
The library will be registered as the global variable `window.Costro`.
:::

## Download and self host

If you prefer self host the JavaScript file, you can download it from the CDN and host it using your own web server. You can then include it using a `<script>` tag.

The files can be browsed and downloaded from the [jsDeliver CDN](https://www.jsdelivr.com/package/npm/costro).

## NPM

npm is the recommended installation method when building applications with Costro. It works well with module bundlers such as [webpack](https://webpack.js.org) or [Rollup](https://rollupjs.org).

<Tabs
defaultValue="npm"
values={[
{ label: 'npm', value: 'npm', },
{ label: 'yarn', value: 'yarn', }
]
}>
<TabItem value="npm">

```bash
npm install costro
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add costro
```

</TabItem>
</Tabs>
