# RxJS

Observer pattern source -> subscribe -> observer

Library for reactive programming using observables.

Observable 8:50
Data (can emit multiple data) 9:00
Operator 11:30
Pipe 12:00
Observer 12:55

Marble diagram

> NOTE: Remember npm install some projects have dependencies

## Observer

## Pipes

## Operators

A ton of operators lmao and documentation. The first one is easy, simple, direct to the point to RxJs
1- https://www.learnrxjs.io/learn-rxjs/
2- https://rxjs.dev/api/index/function/fromEvent

# Crash course

Links to the webpage for easy installation
1- https://coursetro.com/posts/code/147/How-to-Install-RxJS---Setting-up-a-Development-Environment
2- https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables
3- https://coursetro.com/posts/code/149/RxJS-Subjects-Tutorial---Subjects,-BehaviorSubject,-ReplaySubject-&-AsyncSubject
4- https://coursetro.com/posts/code/148/RxJS-Observables-Tutorial---Creating-&-Subscribing-to-Observables

This solve my issue in the `webpack.config.js`

```json
devServer: {
    static: {
      directory: path.join(__dirname, './'),
      watch: true,
    },
  },

```

### Observables

There are hot and cold observables.
It is in java but the theory I think it can be language agnostic
https://www.arquitecturajava.com/hot-vs-cold-observable-con-rxjs/

## NPM

Managing different versions of node (super useful).
`sudo n`

Command to change the location for global modules and getting the location
1- `npm config set prefix /Users/dev/npm_basics/globalnodemodules`
2-`npm config get prefix`

See in terminal all the info of the dependency
`npm view lodash`

Removing a module
`npm remove <name>` or `npm unistall <name>`

> Installing a global module is a bad practice, however if it is a CLI that's fine.

Sometimes we could have problems with the dependencies and maybe something happen with the cache. <br>
**However** npm has a good self-heal cache from corruption.<br>
You could delete the cache with `npm cache clean` although npm will throw you a warning about doing this practice, which is not recommend. <br>
If you feel confident well add the flag force to make it happen. `npm cache clean --force`

If you don't what you're doing, don't worry use this command to verify the files. `npm cache verify`

### Dev dependencies

This will only installed the modules for production environment. NOT development
`NODE_ENV="production" npm install`

### Peer dependencies

You will mostly use it when creating a dependency. Also when a module need another one, like react-dom it needs react.

### Creating custom scripts

Because this is custom script and NPM doesn't have the command.
To run a custom script `npm run <custom-script>`

Add this snippet in package.json `"custom_script": "echo 'This is a custom script'"`

### Npx

A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
We only use once this `npx create-react-app myApp`. (I don't know any other examples)
