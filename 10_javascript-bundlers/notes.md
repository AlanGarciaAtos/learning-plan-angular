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
