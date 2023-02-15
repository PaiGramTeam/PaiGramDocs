# PaimonDocs [![GitHub license](https://img.shields.io/github/license/PaiGramTeam/PaiGramDocs?style=flat-square)](https://github.com/PaiGramTeam/PaiGramDocs/blob/main/LICENSE)

这里是 [PaiGram](https://github.com/PaiGramTeam/PaiGram) 的说明文档，用来记录使用方法和开发指南。

欢迎在 Issues 中提出文档需求，或直接向本仓库提交文档。

## Initialize the project locally

Environment requirements:

- [Node.js](https://nodejs.org) 16.14.0+

### 1. Enable corepack & pnpm

> If your Node.js version is lower than 16.13.0，Please install [corepack](https://nodejs.org/api/corepack.html) first.
>
> ```shell
> npm install -g corepack
> ```

```shell
corepack enable
corepack prepare pnpm@latest --activate
```

### 2. Clone the repository

```shell
git clone https://github.com/PaiGramTeam/PaiGramDocs.git
cd PaiGramDocs
```

### 2. Install dependencies

```shell
pnpm install
```

### 3. Start the development server

```shell
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 4. Some useful commands

`pnpm start`
Starts the development server.

`pnpm build`
Bundles your website into static files for production.

`pnpm serve`
Serves the built website locally.

`pnpm deploy`
Publishes the website to GitHub pages. This command generates static content into the `build` directory and can be served using any static contents hosting service.

`pnpm clear`
Clears the cache.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

> **Note** This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
