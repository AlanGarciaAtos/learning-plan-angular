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

<hr>

## Components

### Create components (with ng)

`ng generate component <name-you-want>`

### Template

DON'T add too much logic. (event binding and a lot of code)

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

<hr>

## Databinding

Communication between Typescript code (business logic) and template (HTML) <br>
1- Output data

- **String Interpolation** ( { {data} } ). It only accepts a string, in the end in need to be a string. You can add ternary operator BUT no code blocks (if statements)
  `<p>{{ "Server" }} with ID {{ serverId }} is {{ getServerStatus() }}</p>`

- **Property Binding** ( [property] = "data") Helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality.
  `<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>`

**String Interpolation** vs **Property Binding** <br>
If you want to output in your template some text use _string interpolation_. <br>
For _property binding_ if you watn to change a directive or a HTML property

2- React to (User) Events

- **Event Binding** ( (event) = "expression") Lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches. <br>

You can also your code in the quotation marks but it not recommend, because can fill your template with a lot of code.

```html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
  (click)="onCreateServer()"
>
  Add Server
</button>
```

This need to be in component ts

```ts
ngOnInit(): void {...}
onCreateServer() {
  this.serverCreationStatus = 'Server was created';
}
```

3- Combination of Both = Two-way-binding ( [(ngModel)] = "data" ) Gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.
`<input type="text" class="form-control" [(ngModel)]="serverName" /> `

## Directives

Directives are instructions in the DOM. (Components are also directives)
Unlike Structural directives, **attribute directives** don't add or remove elements. Only change the element they were placed on.

1- ngIf (struc dir) Changes our structure of our DOM (either adds the element or doesn't add). It's note hidden it's NOT there.
There also an else for ngIf see the code below

```html
<p *ngIf="serverCreated; else noServer">
  Server was created, server name is {{ serverName }}
</p>
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>
```

2- ngStyle (attr dir) Updates styles for the containing HTML element

```html
<p [ngStyle]="{ backgroundColor: getColor() }">
  {{ "Server" }} with ID {{ serverId }} is {{ getServerStatus() }}
</p>
```

3- ngClass (attr dir) Adds and removes CSS classes on an HTML element.

```html
<p
  [ngStyle]="{ backgroundColor: getColor() }"
  [ngClass]="{ online: serverStatus === 'online' }"
>
  {{ "Server" }} with ID {{ serverId }} is {{ getServerStatus() }}
</p>
```

4- ngFor (struc dir) Renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates. _Lesson 42_

```hmtl
<app-server *ngFor="let server of servers"></app-server>

```

### Lesson I need to see again (probably)

1- 16_How an Angular App gets Loaded and Started. See where all the imports and how files are connected
4- 46_Planning the app
2- 62_Understanding Angular Error Messages and 63
3- Make the homeworks(HW 1, HW 2, HW 3 and lesson 44 )

### Current lesson

Lesson 22

### Questions

1- When is a good reason to use `styles: []` (inline style) than `stylesUrl`
2- When is a good reason to make use of different selector
3- Life cycle of a component
4- Experimental support for decorators is a feature that is subject to change in a future relasease (when manually creating a component)
