---
date: 2023-03-17
category: Node.js
---

# Lock Node.js Version

## Why need to lock Node.js version

- Avoiding developers in team to use different Node.js versions

## Configuration

### Specify Allowed Node.js Version

- We need configure allowed Node.js version in `package.json`

_package.json_

```json
{
  "engines": {
    "node": "12.x || 13.x"
  }
}
```

### Configure `engine-strict` to `true`

- We can configure `engine-strict` in `package.json` or `.npmrc` file.

_package.json_

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "engines": {
    "node": "12.x || 13.x"
  }
}

```

_.npmrc_

```markdown
engine-strict = true
```

## Refs

- [Lock Node.js Version](https://segmentfault.com/a/1190000041918155)
- [Repo](https://github.com/Eathyn/lock-node-version)
