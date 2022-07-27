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

Structural directives
1- Look like a normal HTML Attribute but have a leading \* (for desugaring)
2- Affect a whole area in the DOM (elements get added/ removed)

Attribute directive
1- Look like a normal HTML Attribute (possibly with databinding or event binding)
2- Only affect/ change the element they are added to.  
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

Finally there is the `ngSwitch` which can be useful when having a lot of if/else statements, although the most common one are ngFor and ngIf. Hey it can be useful `ngSwitch`!

```ts

<div [ngSwitch]="value">
        <p *ngSwitchCase="5">Value is 5</p>
        <p *ngSwitchCase="10">Value is 10</p>
        <p *ngSwitchCase="100">Value is 100</p>
        <p *ngSwitchDefault>Value is Default</p>
      </div>

```

**Create our custom Basic attribute directive and Better attrivute directive**

Angular is not limited to running in the browser here, it for example also works with service workers and these are environments where you might not have access to the DOM.

Now to be honest, in most circumstances you probably don't and you probably also know if your app is going to run in the browser or not, still it is a better practice to use the renderer for DOM access and to use the methods the renderer provides to access the DOM.

Above the export

```ts
@Directive({
  selector: '[placeholder-name]'
})

```

Basic

```ts
constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

```

Better
(Documentation for Renderer2)[https://angular.io/api/core/Renderer2]

```ts
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
```

**HoistListener**
Can react to any events
Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.

**HostBinding**
@HostListener and @HostBinding, a great way for working with the element inside of a directive. <br>

And of course here on `@HostBinding`, you can bind to any property of the element you are sitting on.

In this it's easier to use `HoistBinding` because we're changing a background color

```ts
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

@HostListener('mouseenter') mouseover(eventData: Event) {
  this.backgroundColor = 'blue'
}
```

### Binding to directive properties & Create directive

Also create structural directive

We can even create our own attribute directive
`@Input('appBetterHighlight') hightlightColor: string = 'blue';`

`<p [defaultColor]="'yellow'">Style me with a better directive</p>`

THis two are the same, uses property binding, so be careful with this.
`<p defaultColor="yellow">Style me with a better directive</p>`

**Behind scenes in structural directive**

ng-template is an element which itself is not rendered but which allows us to define a template in the end for Angular to use once it determines that this template, some element needs to be rendered because this condition is true in this case.

The symbol \* is an easy to not use all the ng-template, an easier to write `ngIf` or `ngFor`

No \*

```ts
<ng-template [ngIf]="!onlyOdd">
        <div>
          <li
            class="list-group-item"
            [ngClass]="{ odd: even % 2 !== 0 }"
            [ngStyle]="{
              backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent'
            }"
            *ngFor="let even of evenNumbers"
          >
            {{ even }}
          </li>
        </div>
      </ng-template>

```

With \*

```ts
<div *ngIf="!onlyOdd">
        <li
          class="list-group-item"
          [ngClass]="{ odd: even % 2 !== 0 }"
          [ngStyle]="{
            backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent'
          }"
          *ngFor="let even of evenNumbers"
        >
          {{ even }}
        </li>
      </div>

```

**Creating a custom structural directive**

```ts
@Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
```

In the HTML `<div *appUnless="onlyOdd">...</div>`, needs to be the specific name you create in custom structural directive.

### Components

We can even share or get data within the components

The default of custom properties in components it's not expose to the project, although we can make of @Input to make it "public" and use it in other components outside of the parent.

We can assign aliases to custom properties `@Input('srvElement')` but you need to change the `[element]` to the aliases you add `<app-server-element [srvElement]="serverElement"></app-server-element>`

There will be some cases which the communication of some components are great (or next to each other) that you don't need to build a chain of input and output.

### Encapsulation

Have the goal of encapsulating styles for the component they belong to. So it doesn't make it global. Is not default behavior, angular does it.

We can make sure that whichever styles we define in a CSS file will only get applied to the component they belong to.

### Local references

A local reference can be placed on any HTML element,
Use data from one part of a template in another part of the template. Use template variables to perform tasks such as respond to user input or finely tune your application's forms.
With this we don't need to use two way binding.

So local references, a very nice feature to get access to some elements in your template and then use that either directly in the template <br>

You could also output `serverNameInput` value here or you can pass it on, like we do to use it in the TypeScript

### View Child & Content Child

The same change (add `{ static: true }` as a second argument) needs to be applied to ALL usages of `@ViewChild()` (and also `@ContentChild()` which you'll learn about later) IF you plan on accessing the selected element inside of `ngOnInit()`.

If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

If you're using Angular 9+, you only need to add `{ static: true }` (if needed) but not `{ static: false }`.

This is a bad practice, a bad way to access the DOM.
` this.serverContentInput.nativeElement.value = 'Something';`

**Content child**
Use to get the first element or the directive matching the selector from the content DOM. If the content DOM changes, and a new child matches the selector, the property will be updated.

### Ng-Content

A nice feature, especially if you think about building re-usable widgets, like a tab widget where each tab will have a content which probably comes from some other source and which you don't want to pass through property binding which always would be an alternative but if it's more complex HTML code, property binding really is not the best solution because Angular will escape HTML tags there to prevent cross-site scripting attacks from happening and you could kind of work around that but really, ng-content then is how you want to display this and that is a great tool to have at your disposal.

### Life Cycle

**ngOnChanges:** Called afterabound input property changes
<br>

**ngOnInit:** Called once the component is initialized
<br>

**ng DoCheck:** Called during every change detection run
<br>

**ngAfterContentInit:** Called after content(ng-content)has been projected into view
<br>

**ngAfterContentChecked:** Called every time the projected content has been checked
<br>

**ngAfterViewInit:** Called after the component's view(and child views)has been initialized
<br>

**ngAfterViewChecked:** Called every time the view(and child views)have been checked
<br>

**ngOnDestroy:** Called once the component is about to be destroyed

### Lesson I need to see again (probably)

1- 16_How an Angular App gets Loaded and Started. See where all the imports and how files are connected
2- 46_Planning the app
3- 62_Understanding Angular Error Messages and 63
4- Make the homeworks(HW 1, HW 2, HW 3 and lesson 44 )
5- Reproducir
6- 76_Getting Access to the Template & DOM with @ViewChild
7- 78_Understanding the Component Lifecycle

### Current lesson

Section 3 (Lesson 49 - Project course ) pending and section 6

### Questions

1- When is a good reason to use `styles: []` (inline style) than `stylesUrl`
2- When is a good reason to make use of different selector
3- _Life cycle of a component (this is my homework xd)_
4- Experimental support for decorators is a feature that is subject to change in a future relasease (when manually creating a component)
5- ng-content is a hook??? Why maximilian called a hook, a typo?
6- Service workers and he said better approach the renderer than accessing the DOM

9- bleedout term in angular????

### Coso de CLI que es

Es una interface de linea de comandos que nos permite inicializar, desarrollar, scaffolding (hacer cimientos) y mantener las aplicaciones de angular directamente en la terminal. Gracias a esto nos permite automatizar tareas que tendriamos que hacer manualmente.

Es un programa que se instala en tu equipo, lo instalas con npm o yarn por eso lo pones -g para que puedas utilizarlo cuando quieras. Se tiene que tener instalado nodejs porque angularCLI corre sobre nodejs

Un comando es ng new, le dices a angularcli que quieres un proyecto de angular.

Un schematic es una plantilla que genera codigo y que soporta logica compleja. Ejemplo: agregar autentificacion a to app de angular.

A veces pasa que tienes diferentes versiones de angular, por ejemplo tienes instalada la version 14.0.0 global pero un proyecto de legado tiene la 7.0.0.

**Realmente esto ya es viejo, angular solito te lo pone el puerto**
Tendras que cambiar de version de node con nvm, ademas que puede ocurrir que el puerto ya esta ocupado por la version que ya tienes de angular, asi que tendrias que cambiar el puerto. `ng serve --port 4002 `
