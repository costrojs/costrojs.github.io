---
id: component
title: Component
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
```

## Function and Class Components

The easiest way to define a component is to write a JavaScript function. The component can also be written as an ES6 class and extends the class `Component` from `Costro`. This offers more features which you will discover below. These can be imported from other files.

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
function Home(props) {
  return <h2>Hello, {props.name}</h2>;
}
```

</TabItem>
<TabItem value="class-component">

```jsx title="src/components/home.js"
import { Component } from 'costro';

class Home extends Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
  }
}
```

<details>
  <summary>Import `Component` with CDN links</summary>

`Component` is exposed in the global variable `window.Costro`.

```js title="src/components/home.js"
class Home extends Costro.Component {}
```

</details>

</TabItem>
</Tabs>

## Transform a Function to a Class

You can transform a function component to a class component with the following steps:

1. Create an ES6 class with the same name, that extends `Component`.
2. Add a single method `render()`.
3. Move the content of the function into the `render()` method.
4. Replace `props` with `this.props` in the `render()` content.

## Lifecycle hooks

Lifecycle hooks are available on **Class Components** only.

We can declare special methods on the component class to run some code when a component is rendered or destroyed.

Try it on [CodeSandbox](https://codesandbox.io/s/costro-lifecycle-5v9d8).

### Before render

The `beforeRender()` method runs before the component output has been rendered to the DOM.

```jsx title="src/components/home.js" {2,3,4}
class Home extends Component {
  beforeRender() {
    // The component is not yet rendered to the DOM
  }

  render() {
    return <h2>Home</h2>;
  }
}
```

### After render

The `afterRender()` method runs after the component output has been rendered to the DOM.

```jsx title="src/components/home.js" {6,7,8}
class Home extends Component {
  render() {
    return <h2>Home</h2>;
  }

  afterRender() {
    // The component is rendered to the DOM
  }
}
```

:::tip
Access to the component's DOM must be done during the `afterRender` hook.
:::

### Before destroy

The `beforeDestroy()` method runs before the component has been removed to the DOM.

```jsx title="src/components/home.js" {2,3,4}
class Home extends Component {
  beforeDestroy() {
    // The component is not yet removed from the DOM
  }

  render() {
    return <h2>Home</h2>;
  }
}
```

### After destroy

The `afterDestroy()` method runs after the component has been removed to the DOM.

```jsx title="src/components/home.js" {6,7,8}
class Home extends Component {
  render() {
    return <h2>Home</h2>;
  }

  afterDestroy() {
    // The component is removed from the DOM
  }
}
```

## Props

Props are inputs accepted by components and [injected from the route](router#route-props).

The function component accepts a single `props` object argument with data as a parameter. The class component has the same principle except that the `props` are exposed in the context of the class with `this.props`.

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
function Home(props) {
  return `<h2>Hello, ${props.name}</h2>`;
}
```

</TabItem>
<TabItem value="class-component">

```js title="src/components/home.js"
class Home extends Component {
  render() {
    return `<h2>Hello, ${this.props.name}</h2>`;
  }
}
```

:::info
If you implement the `constructor()` function on the class component, you should call `super(props)` before any other statement. Otherwise, props will not be available.
:::

</TabItem>
</Tabs>

```mdx-code-block
<BrowserWindow url="http://localhost:3000">
    <h2>Hello, John Doe</h2>
</BrowserWindow>
```

<br />

Try it on [CodeSandbox](https://codesandbox.io/s/costro-props-9noop).

## Nested components

Components can be nested and their props are automatically injected into the child component.

```jsx
class Person extends Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
  }
}

class Home extends Component {
  render() {
    return <Person name="John Doe" />;
  }
}
```

```mdx-code-block
<BrowserWindow url="http://localhost:3000">
    <h2>Hello, John Doe</h2>
</BrowserWindow>
```

<!-- TODO: Try it on [CodeSandbox](https://codesandbox.io). -->

## State changes

You should manually update the DOM on state changes. Making carefully crafted manual updates is much faster than using a virtual DOM with diff algorithms (and also less magic). Lifecycle hooks can be useful in making these updates at the right time.

The following examples show how to update the DOM when the state changes.

<Tabs
groupId="state-changes"
defaultValue="event-handling"
values={[
{ label: 'Event handling', value: 'event-handling', },
{ label: 'Nested component', value: 'nested-component', }
]
}>
<TabItem value="event-handling">

Updates the `#counter` element after each click.

```jsx title="src/components/counter.js"
class Counter extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Clicks: <span id="counter">{this.counter}</span>
      </button>
    );
  }

  handleClick() {
    this.counter++;
    document.getElementById('counter').textContent = this.counter;
  }
}
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-counter-4tilh).

</TabItem>
<TabItem value="nested-component">

Updates the nested `Clock` component with new props every second.

```jsx title="src/components/counter.js"
function Clock(props) {
  return <span id="time">{props.time.toLocaleTimeString()}</span>;
}

class Counter extends Component {
  render() {
    return (
      <>
        It is, <Clock time={new Date()} />.
      </>
    );
  }

  afterRender() {
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    document.getElementById('time').replaceWith(<Clock time={new Date()} />);
  }

  beforeDestroy() {
    clearInterval(this.timer);
  }
}
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-clock-er4hr).

</TabItem>
</Tabs>

## Route data

The component class exposes the `route` data as a class property.

**Signature**

<!-- prettier-ignore -->
```ts
type route = {
  path: string
  params: {
    [key: string]: string
  };
};
```

**Returns**

Current path in URL and list of dynamic segments with their values.

**Example**

```jsx title="src/components/person.js"
class Person extends Component {
  render() {
    return <h2>Person ID: {this.route.params.id}</h2>;
  }
}
```

The above example with the route path `/person/:id` will expose the following data in the `this.route` object.

```json
{
  "path": "/person/42",
  "params": {
    "id": 42
  }
}
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-dynamic-segments-3q8up).
