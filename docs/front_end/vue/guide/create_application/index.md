# Creating a Vue Application

## The Application Instance

- Using `createApp` API to create a vue instance

```js
import { createApp } from 'vue'
const app = createApp({})
```

## The Root Component

- The first argument of `createApp` is the root component.

```js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
```

## Mounting the App

- Calling `app.mount` API to render the application instance.

```js
import { createApp } from 'vue'
const app = createApp(/* ... */)
app.mount('#app')
```

## App Configurations

- The application instance exposes a `.config` object that allows us to configure a few app-level options.

```js
app.config.errorHandler = (err) => {
  /* handle error */
}
```

- The application instance also provides a few methods for registering app-scoped assets.

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```

## Multiple Application Instances

- The `createApp` API allows multiple Vue applications to co-exist on the same page.

```js
const app1 = createApp({})
app1.mount('#container-1')

const app2 = createApp({})
app2.mount('#container-2')
```

## Refs

- [Creating a Vue Application](https://vuejs.org/guide/essentials/application.html)
