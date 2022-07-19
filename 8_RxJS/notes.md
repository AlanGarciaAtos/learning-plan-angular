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

A ton of operators lmao and documentation
1- https://www.learnrxjs.io/learn-rxjs/
2- https://rxjs.dev/api/index/function/fromEvent

# Crash course

Links to the webpage for easy installation
1- https://coursetro.com/posts/code/147/How-to-Install-RxJS---Setting-up-a-Development-Environment
2- https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables
3- https://coursetro.com/posts/code/149/RxJS-Subjects-Tutorial---Subjects,-BehaviorSubject,-ReplaySubject-&-AsyncSubject
4- https://coursetro.com/posts/code/148/RxJS-Observables-Tutorial---Creating-&-Subscribing-to-Observables

This solve my issue in the `webpack.config.js`

````json
devServer: {
    static: {
      directory: path.join(__dirname, './'),
      watch: true,
    },
  },

```
````

### Observables

There are hot and cold observables.
It is in java but the theory I think it can be language agnostic
https://www.arquitecturajava.com/hot-vs-cold-observable-con-rxjs/
