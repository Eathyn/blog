# Configuration Options

- Configuring TypeScript options via either command-line flags passed to `tsc` or seperated `tsconfig.json` file.

## tsc Options

- The `tsc` command can take in most of TypeScript's configuration options as `--` flags.

```bash
# skip emitting an js file
tsc <ts file> --noEmit
```

### Pretty Mode

- pretty mode: stylized with colors and spacing to make them easier to read
- pretty mode flag: `--pretty`

### Watch Mode

- watch mode: recompile TypeScript after changing the code
- watch mode flag: `--watch` / `-w`

## TSConfig Files

- `--project` / `-p` flag: specify the path of `tsconfig.json` file

```bash
tsc --project path/to/tsconfig.json
```

### tsc --init

- `--init` flag: creating a new `tsconfig.json`:

```bash
tsc --init
```

- It's recommended using `tsc --init` to create the configuration file for new TypeScript project.

### CLI Versus Configuration

- Most options available in both the CLI and in TSConfig files fall into one of two categories:
  - compiler: how each included file is compiled and/or type checked by TypeScript
  - file: which files will or will not have TypeScript run on them

## File Inclusions

- hidden `.ts` files: ts files whose names start with a `.`
- By default, `tsc` will run on all non-hidden `.ts` files, ignoring hidden directories and directories named `node_modules`.

### include

- The `include` option is an array of strings that describes what directories and/or files to include in TypeScript compilation.
