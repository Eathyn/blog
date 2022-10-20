# An introduction to the NPM package manager

## Introduction to npm

- npm is the standard package manager for Node.js.
- It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in frontend JavaScript.

## Packages

- npm manages downloads of dependencies of your project.

### Installing all dependencies

- If a project has a package.json file, by running `npm install`, it will install everything the project needs.

```bash
npm install
```

### Installing a single package

```bash
npm install <package-name>
```

- Furthermore, since npm 5, this command adds <package-name> to the `package.json` file dependencies. Before version 5, you needed to add the flag `--save`.

- More flags:
  - `--save-dev` installs and adds the entry to the package.json file _devDependencies_
  - `--no-save` installs but does not add the entry to the package.json file _dependencies_
  - `--save-optional` installs and adds the entry to the package.json file _optionalDependencies_
  - `--no-optional` will prevent optional dependencies from being installed

- Shorthands:
  - `-S`: --save
  - `-D`: --save-dev
  - `-O`: --save-optional

- The difference between _devDependencies_ and _dependencies_ is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.

- As for the optionalDependencies the difference is that build failure of the dependency will not cause installation to fail.

### Updating packages

- `npm update` will check all packages for a newer version that satisfies your versioning constraints.
- `npm update <package-name>` will update a single package.

## Versioning

- In addition to plain downloads, npm also manages versioning, so you can specify any specific version of a package.
- Many times you'll find that a library is only compatible with a major release of another library, or a bug in the latest release of a lib, still unfixed, is causing an issue.

```bash
npm install <package-name>@<version>
```

## Running Tasks

```bash
npm run dev
```

## Refs

- [An introduction to the NPM package manager](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [NPM documents](https://docs.npmjs.com/)
- [optionalDependencies](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#optionaldependencies)
