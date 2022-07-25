# Angular

## Angular Basics

Angular is a javascript framework which allows you to create reactive **Single-Page-Applications(SPA)**

Later we see the `--no-strict`, we start the project for angular

ng new my-first-app --no-strict

In `angular.json` this snippet "src/styles.css" I need to add or just deleted because it got me an error.

Making an angular app with strict mode (Check "first app" lesson)
If you enabled it by accident, you can also disable it by setting `strict: false` in your `tsconfig.json` file.

### App module

Angular uses components to build web pages and uses modules to basically bundle different pieces and functionalities, for example components of your app into packages.

### Create components (with ng)

`ng generate component <name-you-want>`

### Template

You can also a template without url, although they recommend if you have more than 3 it's better the templateUrl <br>
**template: `<app-server></app-server> <app-server></app-server>`,**

### Styles

Two ways to add a css. Inline or link

```js
styleUrls: ['./app.component.css'];
styles: [
  `
    h3{
      color: red;
    }
  `,
];
```

### Selector

```js
selector: 'app-servers', => <app-servers></app-servers> //By element
selector: '[app-servers]', => <div app-servers></div> //By attribute
selector: './app-servers', => <div class="app-servers"></div> //By class name
```

### Lesson I need to see again (probably)

1- 16_How an Angular App gets Loaded and Started. See where all the imports and how files are connected
2- 62_Understanding Angular Error Messages and 63

### Current lesson

Lesson 22

### Questions

1- When is a good reason to use `styles: []` (inline style) than `stylesUrl`
