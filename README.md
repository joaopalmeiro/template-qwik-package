# template-qwik-package

Opinionated [Qwik](https://qwik.dev/) template for new component packages.

- [Source code](https://github.com/joaopalmeiro/template-qwik-package)
- [npm package](https://www.npmjs.com/package/template-qwik-package)
- [Licenses](https://licenses.dev/npm/template-qwik-package/0.0.0)

## Getting Started

1. Go to or create the package folder.
2. Get the template files:

```bash
npx degit github:joaopalmeiro/template-qwik-package
```

or

```bash
npx degit github:joaopalmeiro/template-qwik-package --force
```

3. Search for `template-qwik-package` and replace it with the package name.
4. Search for `Opinionated Qwik template for new component packages.`/`Opinionated [Qwik](https://qwik.dev/) template for new component packages.` and replace it with the (short) package description.
5. Search for `João Palmeiro` and replace it with the author's name.
6. Install [fnm](https://github.com/Schniz/fnm) (if necessary).
7. Run the first two commands in the [`Development` section](#development) to install [Node.js](https://nodejs.org/en) and the development dependencies.
8. Open the [NOTES.md](NOTES.md) file and install the package-specific dependencies according to the first command in the [Commands section](NOTES.md#commands).
9. Update the `Source code` link at the top to the package repository link.
10. Change `GitHub` in the [`Deployment` section](#deployment) to `GitLab` or `Codeberg` (if necessary) and update the link to the corresponding Tags page.
11. Delete the [`Template References` section](NOTES.md#template-references) from the [NOTES.md](NOTES.md) file.
12. Delete the [`Getting Started` section](#getting-started).

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

- Update the version in the `Licenses` link at the top.
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
