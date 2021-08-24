**Yes, like you see it, with this template you can develop React Apps with Typescript and ESbuid as modules bundler**

![Template Image](https://res.cloudinary.com/ackerman/image/upload/v1629677479/repos-assets/react-esbuild-template_g3zfyo.png)

## Project's scripts

First clone this repo `git clone https://github.com/jleonardo007/react-esbuild-template-ts-version.git` then within the project's root directory you can run:

### `yarn install`

Installs the project's dependencies specifies in package.json.

### `yarn start`

This script runs as follow:

1. Creates a server through `esbuild.serve()`. This serves the bundled files at **http://localhost:8080/serve/**.

2. Creates a development server that serves files at **public folder** then `index.html` consumes the files serve by **http://localhost:8080/serve/**. Development server runs at **http://localhost:3000**

### `yarn test`

Runs your tests files through **Jest**, you could specify a path or a regex that **Jest** runs your test against them eg: `yarn test src/components/any-component/index.test.js` in this case **Jest** runs at this path only.

### `yarn build`

Creates an optimized bundle ready to be deployed.
