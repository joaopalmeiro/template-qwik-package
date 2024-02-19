# template-qwik-package

Opinionated Qwik template for new component packages.

## Development

Install [fnm](https://github.com/Schniz/fnm) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run format
```

```bash
npm run lint
```

```bash
npm run dev
```

```bash
npm run build
```

## Deployment

### Package

```bash
npm pack --dry-run
```

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check [GitHub](https://github.com/joaopalmeiro/template-qwik-package/tags).

```bash
npm login
```

```bash
npm publish
```

- Check [npm](https://www.npmjs.com/package/template-qwik-package).
