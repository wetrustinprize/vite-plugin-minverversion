# vite-plugin-minverversion

Automatically gets the `minver` version of the project and adds to Vite's define.

## Install

```bash
npm i vite-plugin-minverversion --save-dev
```

## Usage

```js
// vite.config.js

import minverVersion from 'vite-plugin-minverversion'

export default {
    plugins: [
        minverVersion()
    ]
}
```

### TypeScript support

```ts
// vite-env.d.ts

/// <reference types="vite/client" />
declare const MINVER_VERSION: string;
```