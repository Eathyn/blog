---
date: 2023-03-23
category: Node.js
---

# Lock Package Manager

## Why Need to Lock Package Manager

- Avoid developers using different package managers.

## Configuration

### Install `only-allow` Package

```bash
npm i -D only-allow
```

### Configure `preinstall` in `package.json`

- Only using `npm`

```json
{
  "scripts": {
    "preinstall": "npx only-allow npm"
  }
}
```

- Only using `yarn`

```json
{
  "scripts": {
    "preinstall": "npx only-allow yarn"
  }
}
```

- Only using `pnpm`

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

## Refs

- [Lock Package Manager](https://segmentfault.com/a/1190000041918155)
- [only-allow package](https://www.npmjs.com/package/only-allow)
- [Repo](https://github.com/Eathyn/lock-package-manager)
