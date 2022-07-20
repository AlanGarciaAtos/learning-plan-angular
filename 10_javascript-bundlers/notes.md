### Javascript Bundlers (Webpack, Parcel)

Take multiple js files and combining into a large js file.
If we want to use a dependency without a bundler, the browser tells they doesn't know where to search.

**Code splitting**: break code into smaller chunks
We can see this in the entry `webpack.config.js`
, with various entries.

**Loaders**: process files that aren't javascript
**Rules**: match files to loaders
**Plugins**: tap into the bundler lifecycle
**Dev Server**: watch and serve my files (like live server for html,css,js)

Installing webpack
`npm i --save-dev webpack webpack-cli`

### Configuring Webpack

[Learn Webpack - Full Tutorial for Beginners](https://www.youtube.com/watch?v=MpGLUVbqoYQ)

Using **loaders** (CSS & SASS), install `npm install --save-dev css-loader`

Cache busting
`filename: 'main.[contentHash].js',`
(More info)[https://webpack.js.org/guides/caching/]

### Plugins

```json
plugins: [
    new HtmlWebpackPlugin({
      // title: 'Caching',
      template: './src/template.html',
    }),
  ],
```

In output of webpack, the dir dist doesn't give a hash js file (like in the video) for cashing.
`filename: '[name].[contentHash].js'`<br>
`filename: 'main.js',`

Do I really need file-loader in `webpack config`? I only use `html-loader` and the image works correctly

**EDIT:** `file-loader` DEPRECATED for v5: please consider migrating to `asset modules`.

Clean Webpack Plugin
Our` /dist` folder has become quite cluttered. <br>
Good practice to clean the /dist folder before each build, so that only used files will be generated.

> In the official documentation I think it's easier than installing a module (Clean webpack plugin). Just add `clean:true` in output

Maybe `HtmlWebpackPlugin` do it itself and that's why I don't need **css-minimizer-webpack-plugin**
(Plugin that I don't need to use because webpack do it automatically)[https://webpack.js.org/plugins/css-minimizer-webpack-plugin/]

### 3 config files

1- Shared with dev and production
2- Dev
3- Production

Merge to config webpack files `npm i --save-dev webpack-merge`

**Issues with this webpack.merge** <br>
Fixing Webpack Merge Is Not a Function
Starting with version 5 of webpack-merge, the merge function moved to a named export instead of being the default export.

You must destructure the merge function from the package import: `const { merge } = require('webpack-merge');`

This will start the webpack dev server and with the open flag it will automatically open.
`"start": "webpack-dev-server --config webpack.dev.js --open",`

## Parcel

Using `autoprefixer` is redundant in the postcss, parcel already transpilates the css by default
