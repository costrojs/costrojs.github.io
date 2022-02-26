---
id: index
title: Tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to the Costro tutorial. You'll learn a quick start guide and the most important concepts to easily start building quick web apps. You can also view the [Docs](/docs/installation) and the [Playground](/tutorial/playground).

## Downloading Costro

First, make sure you've installed [Node.js](https://nodejs.org/en/download). When you're ready, in a terminal, run:

```bash
npm install costro
```

:::info

Other installation methods are available: [CDN](/docs/installation#cdn), [self host](/docs/installation#download-and-self-host)

:::

## Choose the template syntax

Costro's component templates can be written in native Template String or with JSX.

<Tabs
groupId="template-syntax"
defaultValue="template-string"
values={[
{ label: 'Template String', value: 'template-string', },
{ label: 'JSX', value: 'template-jsx', }
]
}>
<TabItem value="template-string">

```js title="src/components/home.js"
class Home extends Component {
  render() {
    return `<h2>Home</h2>`;
  }
}
```

</TabItem>
<TabItem value="template-jsx">

```js title="src/components/home.js"
import { h } from 'costro/jsx';

class Home extends Component {
  render() {
    return <h2>Home</h2>;
  }
}
```

</TabItem>
</Tabs>

Read the [Template syntax](/docs/template-syntax) guide for more details.

## Fundamentals

### Create components

Create components so that we can later associate them with routes.

```jsx title="src/components/home.js"
import { Component } from 'costro';
import { h } from 'costro/jsx';

// Shared component
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>Home</h2>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>About</h2>
      </div>
    );
  }
}
```

Read the [Component](/docs/component) guide for more details.

### Defines routes

Define routes and associate them with your components.

```js
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

Read the [Router](/docs/router) guide for more details.

### Create the application instance

Create the application instance and pass the routes configuration.

```js
const app = new App({
  target: document.querySelector('#app'),
  routes
});
```

Read the [Application](/docs/application) guide for more details.

## Use store

Read the [Store](/docs/store) guide for more details.
