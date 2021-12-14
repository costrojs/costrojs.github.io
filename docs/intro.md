---
id: intro
title: Introduction
---

## What is Costro?

Costro is a new lightweight framework with a different approach: helping you **build fast web applications** with a **low level of dependency**. If you are concerned about your app's loading performance, this library makes sense as it is extremely lightweight compared to the competition _(only 3 KB)_.

Costro allows you to create components with store and a router in one lightweight easy-to-use package.

## Motivation

Finding the framework that matches your needs without impacting web performance is not that easy these days. Popular librairies generally embed more and more code as the community and popularity increase.

Single Web Applications do not benefit from page reloading to improve performance, so the JavaScript code embedded during the first load is heavier.

In addition, we do not use 100% of the features included in the frontend frameworks and generally, the dependency part can be larger than the actual written code.

Costro is lightweight and flexible to let you easily build high performance web applications.

### Virtual DOM

Costro does not use virtual DOM because it is, by definition, slower than carefully crafted manual updates.

> Virtual DOM is pure overhead.
> -- <cite>[Rich Harris](https://svelte.dev/blog/virtual-dom-is-pure-overhead)</cite>
>
> Virtual DOM is ultimately a round-about way of performing DOM updates.
> -- <cite>[Hajime Yamasaki Vukelic](https://medium.com/@hayavuk/why-virtual-dom-is-slower-2d9b964b4c9e)</cite>

### Template syntax

Costro templates can be written in Template String or with JSX, depending on your needs.

### Local and global store

Each components has a local store and Costro allows you to access it from any components.
