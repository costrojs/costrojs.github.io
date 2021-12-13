---
id: store
title: Store
---

The component store is a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object declared locally in the component itself as a class property. Components can view, set and get data in their store and also get data from another component.

:::tip
The store is accessible in the whole context of the Component class, including the lifecycle hooks.
:::

## Properties

### store

View the contents of the component store.

**Signature**

<!-- prettier-ignore -->
```ts
type store = Map<string, object>
```

**Example**

```js title="src/components/home.js" {5}
class Home extends Component {
  constructor(props) {
    super(props);

    console.log(this.store);
  }
}
```

## Methods​

### setStore

Add data to the component store.

:::info
When the key already exist in the Map object, Costro will perform a deep cloning of the data.
:::

**Signature**

```ts
setStore(data: object): void
```

**Parameters**

| Parameter |   Type   | Description                                                                     |
| --------- | :------: | ------------------------------------------------------------------------------- |
| `data`    | `object` | The data to add to the store. Each key will be added associated with its value. |

**Example**

```js title="src/components/home.js" {5,6,7}
class Home extends Component {
  constructor(props) {
    super(props);

    this.setStore({
      name: 'John Doe'
    });
  }
}
```

The value of the Map objecrt of the component store will be:

```text
Map(1) {"name" => "John Doe"}
```

### getStore

Get the data associated with the key from the component store. If the optional `path` parameter is specified, the data is extracted from the component associated with the path.

**Signature**

```ts
getStore(key: string, path?: string)
```

**Parameters**

| Parameter |   Type   | Description                                                                                                                                   |
| --------- | :------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`     | `string` | The key of the data to search in the store                                                                                                    |
| `path`    | `string` | (Optional) The path of the external component. It must correspond to a valid route path ([associated with a component](router#define-routes)) |

**Returns**

The data associated to the key.

**Examples**

```js title="src/components/home.js" {6,9}
class Home extends Component {
  constructor(props) {
    super(props);

    // The "name" key in the component store
    this.getStore('name');

    // The "name" key in the external component "/about"
    this.getStore('name', '/about');
  }
}
```

Try it on [CodeSandbox](https://codesandbox.io/s/costro-store-vf0v2).
