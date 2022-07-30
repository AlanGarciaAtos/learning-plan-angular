# Angular

Angular - The Complete Guide (2022 Edition) - Maximilian

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

## Services & Dependency Injection

Services: just another piece in your Angular app, another class you can add which acts as a central repository, as a central business unit you could say, something where you can store, where you can centralize your code in.

A good way to don't repeat your code and keep it clean. Also don't make use a lot of Input and Output.

Well a dependency is something a class of ours will depend on, for example the new account component depends on the loggingService because we want to call a method in that service and the dependency injector simply injects this dependency, injects an instance of this class into our component automatically.

This is not a good way to instantiate our service.

```ts
import { LoggingService } from '../logging.service';
const service = new LoggingService();
service.logStatusChange(accountStatus);
```

Better to way to do it.
To tell Angular you add a service, add this below the @Component `providers: [LoggingService]`

```ts
constructor(private loggingService: LoggingService) {...}
```

**Creating a data service**
Lesson 109

**Hierarchical Injector**

1- **AppModule:** Same Instance of Service is available Application-wide
2- **AppComponent:** Same Instance of Service is available for all Components(but not for
other Services)
3- **Any other Component:** Same Instance of Service is available for the Component and all its
child components

Be careful when you're using the providers `providers: [LoggingService, AccountsService]`
Now we're using one and the same, before we weren't. Both may be the behavior you want in your app but make sure that you get the correct one.

Don't remove it form the constructor only in the array providers

### Different Way Of Injecting Services

Instead of adding a service class to the providers[] array in AppModule , you can set the following config in `@Injectable()`:

```ts
@Injectable({providedIn: 'root'})
export class MyService { ... }
```

This is exactly the same as:

`export class MyService { ... }`
and

```ts
import { MyService } from './path/to/my.service';

@NgModule({
    ...
    providers: [MyService]
})
export class AppModule { ... }
```

Using this syntax is completely optional, the traditional syntax (using `providers[]` ) will also work.

The "new syntax" does offer one advantage though: Services can be loaded lazily by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.

### Injecting services into services

Make sure to add it in to the `app.module.js`

Communicating between components through a service which really can save you a lot of time- <br>
Make sure to use the right amount of instances and if you inject services into services, make sure to provide the service on the app module level and to add @injectable to a service where you want to inject it in.

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

## Routing

A way to change what the user sees by showing and hiding some specific webpage contents, rather than going out to the server to get a new page.

Angular ships with its own router which allows you to change the URL in the URL bar and still only use one page but then exchange major parts or a lot of parts of that page, so that to the user, it really looks like a new page was loaded because maybe only the header is the same but behind the scenes, it is still Javascript changing a lot of parts in your DOM, in your page, making it look like a new page was rendered but you're still in the Angular world in your single page application.

_Adding the routes_

```ts
const appRoutes: Routes = [{ path: 'users', component: UsersComponent }];
```

_Adding the imports to get the routes_

```ts
@NgModule({
  declarations: [...],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],bootstrap: [AppComponent]
})
```

_Adding the components in html_
In our HTML we need to add `<router-outlet>` to get html, however we still need to connect the other pages.

`<router-outlet></router-outlet>`

Apparently there are different ways to route different pages in Angular. The name we already define it in the `app.module.ts`.
_Works too without the / apparently_

```html
<a routerLink="/">Home</a>
<a routerLink="/servers">Servers</a>
<a [routerLink]="['/users']">Users</a>
```

Absolute paths with a slash at the beginning which will always get appended to the root domain, relative paths without a slash or with ./ which means added to the currently loaded path or ../ and you can even add more of them to say well go back ones path, go back another path.

### Styling active router links

In the `routerLinkActive="active"` the active is a custom class of css or bootstrap if you have it.`[routerLinkActiveOptions]="{ exact: true }"` this tell angular to remove the style if the full path is whatever the links leads to.

```html
<li
  role="presentation"
  routerLinkActive="active"
  [routerLinkActiveOptions]="{ exact: true }"
>
  <a routerLink="/">Home</a>
</li>

<li role="presentation" routerLinkActive="active">
  <a routerLink="/servers">Servers</a>
</li>
```

### Relative paths in programmatic navigation

Because unlike the routerLink, the navigate method doesn't know on which route you are currently on, so to say. The routerLink always knows in which component it sits, in which components template and therefore it knows what the currently loaded route is.

**Activate route**
Now ActivatedRoute like the name implies simply injects the currently active routes, so for the component you loaded, this will be the route which loaded this component and the route simply is kind of a complex Javascript object which keeps a lot of meta information about the currently active route.

### Passing Parameters to routes (Dynamically load)

Adding the : tells angular that is a dynamic route,retrieve the parameter inside hte loaded component by the name you specify here.

```ts
const appRoutes: Routes = [{ path: 'users/:id', component: UserComponent }];
```

Without the : angular would think it's a specific routem in this "id", literally he string.

To avoid confusion: The `ActivatedRoute` object we injected will give us access to the id passed in the URL => Selected User

> When using observables in angular, the framework removed tha one that we're not using, however if we're using our custom observables. We need to unsuscribe.

### Child Routing

You can child routing, or have a little bit more organized using the routes to appea it in the same template. You need to add `router-outlet` in the template

```ts
{
    path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
```

### Redirect to not found pages

Make sure to add the wildcard the LAST because if you add first it will not found any route.

```ts
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
```

### Redirection Path Matching

By default, Angular matches paths by prefix. That means, that the following route will match both /recipes and just /

{ path: '', redirectTo: '/somewhere-else' }

Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with '' (Important: That's no whitespace, it's simply "nothing").

To fix this behavior, you need to change the matching strategy to "full" :

`{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } `

Now, you only get redirected, if the full path is '' (so only if you got NO other content in your path in this example).

## Route guard

So basically functionality, logic, code which is executed before a route is loaded or once you want to leave a route.

`canActivate`, his neighbor `canActivateChild`, finally `canDeactivate` guards

### Protecting child (nested) routes

Now we get redirected back because now only the child routes are protected. So now this is the finegrained control you can implement to protect a whole route and all its child routes or just the child routes, depending on which behavior you need in your app.

`canActivateChild: [AuthGuard],`

### Location strategies

In older browsers you may need to use useHash to access the route because the server parsed the url in the client.
<br>
There is another way more elegant later in the course

`RouterModule.forRoot(appRoutes, {useHash: true})`
`RouterModule.forRoot(appRoutes)`

## Pipes

Allows you to transform output (transforming values) in your template.

While using pipes updating arrays or objects doens't trigger it.
Adding `pure: false` whenever we change data on the page, our pipe is recalculated you could say.

**Async pipe** subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes.

It recognizes that this is a promise and as a side note, it would also work with observables, there it would subscribe automatically and after two seconds, it will simply recognize that something changed, that the promise resolved or in the case of an observable, that data was sent through the subscription and it will print this data to the screen

With pipes the variable is also a parameter.

This will get the date without all the zeros and it will make uppercase the letters.
`{{ server.started | date: "fullDate" | uppercase }`
**\_**1 parameter**\_\_\_**2parameter**\_\_\_**3 parameter

It is important how you added them, in this case it throws us an error because uppercase tries to transform a Date not a string. <br>
This code first give us a Date, the fullDate transform it into a string.
`{{ server.started | uppercase | date: "fullDate"}`

### Creating our custom pipe

1- Create a file `<name>.pipe.ts`, add decorator Pipe with a name.
2- Implement `PipeTransform`,also add transform inside the class add your logic/code
3- Add it in the template and `app.module.ts`
**Bonus:** If you wanto to add parameters in your custom pipe just add another parameter in the `transform` method.

Also you can add parameters to your custom pipes or use the ones that has paramaters.
Add the : to add multiple parameters (if they have).
`{{ server.started | uppercase | shorten: 15: 31"}`

## Forms

Because we're building a SPA we don't have a server so we need the help of angular.

You will reach Angular HTTP
1- Get the values of the user
2- Check form is valid
3- Conditionally change the form (add red border if wrong)

### Why we need Angular help?

Allows you or it gives you actually such a Javascript object representation of your form, making it simple for you to retrieve user values and to see the state of the form and to work with it.

### Template-Driven vs Reactive Approach

**Template-Driven**
_TDLR:_ Angular infers the Form Object from the DOM
<br>
You simply set up your form in the template, in HTML code and Angular will automatically infer the structure of your form, will infer which controls your forms has, which inputs and makes it easy for you to get started quickly.

Where you need to add to get the form `(ngSubmit="").`. <br>
Tells Angular hey please give me access to this form you created automatically. ` #f="ngForm"`
`<form (ngSubmit)="onSubmit(f)" #f="ngForm">`
Angular gives us a javascript object

NgForm have a lot of properties, the majority are self explanatory.

- **Dirty:** is if the input has some content. false if the user didn't write anything.

We can access the form with `@ViewChild('f') signupForm: NgForm;`

Angular have a lot of validators (Angular docs)[https://angular.io/api/forms/Validators] <br>
For example `email` checks if it is a valid email, also they add CSS classes (ng-dirty, ng-touched, ng-valid)

Changing the styles of ng classes

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

### Three ways to bind a form

1- **No binding** to just tell Angular that an input is a control

2- **One-way binding** to give that control a default value
3- **Two-way binding** to instantly output it or do whatever you want to do with that value.

We can output error message, editing the class of ng

```html
<span class="help-block" *ngIf="!email.valid && email.touched"
  >Please enter a valid value!</span
>
```

Setting the default values `defaultQuestion = 'pet'`

```html
<select
  id="secret"
  class="form-control"
  [ngModel]="defaultQuestion"
  name="secret"
>
  <option value="pet">Your first Pet?</option>
  <option value="teacher">Your first teacher?</option>
</select>
```

Using ngModel with two way binding `answer = '';`

```html
<textarea
  name="questionAnswer"
  rows="3"
  class="form-control"
  [(ngModel)]="answer"
></textarea>
```

To group the form we need to add `<div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">`

Group the form in a JS object`ngModelGroup="userData" ` and to get access the JS object`#userData="ngModelGroup"`

A bit different approach to use radio buttons. In TS file `genders = ['male', 'female'];`;

```html
<div class="radio" *ngFor="let gender of genders">
  <label>
    <input type="radio" name="gender" ngModel [value]="gender" required />
    {{ gender }}
  </label>
</div>
```

### Modidy your form or populate

`setValue` to set your whole form, `patchValue` to overwrite parts of the form.

Very useful helper methods

### Using form data

This is how you can extract the data, how you can use it, how you can add a property like submitted to make sure you only display certain sections of the form was submitted and how you in the end use that data.

```ts
user = {...};
submitted = false
onSubmit() {...}
```

```html
<div class="row" *ngIf="submitted">
  <div class="col-xs-12">
    <h3>Your Data</h3>
    <p>Username: {{ user.name }}</p>
    <p>Mail: {{ user.email }}</p>
    <p>Secret Question: {{ user.secretQuestion }}</p>
    <p>Answer: {{ user.answer }}</p>
    <p>Gender: {{ user.gender }}</p>
  </div>
</div>
```

### Resetting forms

When we submitted the form the inputs will be reset.

```ts
onSubmit(
  ...
  this.signupForm.reset();
)

```

> Note: If you want, you can pass the same object as in setValue() to reset() which then reset the form to specific values!

**Reactive Approach**
_TDLR:_ Form is created programatically and synchronized with the DOM.
<br>
You actually define the structure of the form in TypeScript code, you also set up the HTML code and then you manually connect it which might sound more complicated than it is in the end and therefore, it gives you greater control over it, you can fine tune every little piece about your form.

### Create a form

Creating your form via reactive approach. You can use multiple validator but you need to use an array.

```ts
this.signupForm = new FormGroup({
  username: new FormControl(null, Validators.required),
  email: new FormControl(null, [Validators.required, Validators.email]),
  gender: new FormControl('male'),
});
```

### Check if it is valid a form

It need to return null, angular works like that. Maybe because it returns a value and make it invalid the form and get blocked??

```ts
forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsFobidden': true }
    }
    return null;
  }

```

### Reacting to status or value changes

You can listen to or you can subscribe to if you really want to closely watch what happens in your form or again on an individual control and want to react to that.

```ts
this.signupForm.valueChanges.subscribe((value) => console.log(value));

this.signupForm.statusChanges.subscribe((value) => console.log(value));
```

### Setting and patching values

It's like we add a placeholder to our inputs. When we use patch value it will override whatever value we have in the form. In this case "Alan" overrides "Max"

```ts
this.signupForm.setValue({
  userData: {
    username: 'Max',
    email: 'max@test.com',
  },
  gender: 'male',
  hobbies: [],
});

this.signupForm.patchValue({
  userData: {
    username: 'Alan',
  },
});
```

## Http Requests

You don't connect Angular to a database directly.

You don't enter your database credentials into your Angular app or anything like that.<br>
Highly insecure because everyone can read your Angular code since it's a front-end Javascript

We send HTTP request and get HTTP responses from the server. A server in the end is defined an API here.
We get data in a json format not html

### Anatomy of Http Requests

1- **URL (API Endpoint):** the exact path here of course depends on the API you're interacting with. Ex: domain.com/users/name/1

2- **Http verb:** Defines which request we want to do

- Want to fetch data?
- Want to replace existing data?
- Want to store new data?

While using an API you need to go to the docs, or if you're creating one you need to know their uses.

> POST, GET, PUT, DELETE, PATCH

3- **Headers (Metadata):** Kind of optional or to be precise, some default headers will be appended to a request for you by the browser and by Angular but you can also append your own headers and that is therefore also something we'll have a look at.

`{"Content-Type":"aaplication/json"}`

4- **Body:** Some verbs may use a body, that's the core data that is attached to a request.
<br>

Can be set on _POST_ , _PUT_ & _PATCH_ which are requests that do alter data on the server. (adding or replacing it).

<br>

- Single-resource bodies, consisting of one single file, defined by the two headers: Content-Type and Content-Length.
- Multiple-resource bodies, consisting of a multipart body, each containing a different bit of information. This is typically associated with HTML Forms.
  (Image)[https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/http_request_headers3.png]

While fetching data is a good practice to separated in services.

It is important the position of the providers, we can have some different output.

```ts
providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ],

```

https://angular.io/guide/http

## Authentification

See again 288 lesson (Authentification works)

This is why this is secure, because the server knows more than the client but we give the client one important piece which is required to authenticate subsequent requests but that piece is given by the server, it can't be generated on the client for the security reasons I just stated.

### dsadsa

Next js vs React js

### React libreria de UI

JS to React

1 Manipular el DOM con JS plano, poderoso pero muy verboso
2 Navegador lee el DOM
3 React es una libreria declarativa

Con js requiere mas pasos para modificar el dom
Declarativo, react se va encargar del resto, si quieres hacer algo.

Ventajas React

- Facil de programar
- Componentes, se trabaja con los tags y se hace un arbol ademas que podemos reutilizar codigo
- Comunidad (muchas personas, foros,)
- Customizacion, muchos paquetes/librerias como redux e animacion

Desventajas React

- Docs viejos (se actualiza rapido react)
- Solo es libreria de frontend a comparacion de react.
- usar muchas librerias
- Usa un archivo HTML y no es muy bueno con SEO

### Next

React to next

Mejora la experiencia de usuario y al desarrollador

Desarrollador: typescript, eslint, fast refresh
Usuario: se optimiza y es muy rapida

Utiliza minification, bundling, compilation. Rust se encarga de eso

Bundling: js,tsx,css,tsx -> js, css

Ventajas Next

- Como Frontend y backend
- Tenerlo en un solo repositorio
- Basado en react, corre sobre react (si sabes react la tienes facil con next)
- Usa SSR (cargar archivos en el servidor y el usuario agarre por partes)
- Optimiza mejor las imagenes, o carga lenta o placeholders
- Amigable con SEO (usa lo que hacemos al principio html y js)

Desventajas Next

- Routing (puedes tener un manejo mas facil de carpetas y rutas)

## Nextjs vs React

- Facil de programar: ambos
- Performance: Next (SSR, optimizacion imagenes)
- Docs: Casi ambos porque next corre en react
- Comunidad: mas en react
- aprender: react, next corre sobre react
- costo: mejor react

Routing React
Componente que se llama `Routes` y tenemos un archivo de js.
Puede ser confuso porque esta todo junto, si solo quieres una ruta, o que dos rutas se van a donde mismo.

Routing Next
Con carpetas que tiene componentes .jsx.
Podemos tener rutas dinamicas solo con poner corchetes a la carpeta.

React data
Como hacer peticiones, como js con fetch, calback, async o axios-
El usuario lo puede ver porque el browser lo descarga,

Next data
Solo tiene funciones que solo corren de lado del servidor, NUNCA se va a descargar al browser del usuario.
Se usa static generation, solo se corre una vez ,los datos no mutan y no los descarga

Next Image OPtimization

- Improved performance: el servidor se encarga de optimizar y no el usuario/cliente
- Stabilidad visual
- Cargas mas rapidas: solo se cargan cuando ya las ves en el viewport
- flexibilidad de assets

# Client side rendering

Usuario haceun request al servidor y usuario obtiene el html y js de las instrucciones. Js se jecuta para hacer lo que esta programado

# Server side rendering

Html ya esta prerenderizado, menos tiempo de espera, interactuar instantaneo

# Static rendering

La pagina no tiene ninguna hidratacion, se puede renderizar al mismo tiempo de la compilcaion y el usario obtiene la pagina

# Pre rendering and hydratation

Se puede usar en react pero librerias y mas codigo
hidratacion: añadir elementos o actualizaciones y lo hace el cliente en react. Next lo hace el servidor

cuando hago una peticion al servidor, lo que pides es el html, darle funcionalidad a los elementos de ese arvhico html,css,js
Treaer las funcinoalidades, compnetnees, estilos a nuestra pagina
y rehidratar solo cambiar los elementos necesarios

estructura de islas
no solo envies el html envia el js del componente

### Performance

Next en mas rapida porque tiene SSR, paginas ya estan rerenderizadas. Optmiza las imagenes
React se renderizan por parte del cliente

### Casos de uso

react: aplicaciones multiplataforma por react native, visualization de datos, y para single page aplication
next: tiendas de eccomerce, portales de clientes, o websites de marketing(imagenes)

Como podrias proteger la info en react, una libreria, o simplemente asi?

### Lesson I need to see again (probably)

1- 16_How an Angular App gets Loaded and Started. See where all the imports and how files are connected
2- 46_Planning the app
3- 62_Understanding Angular Error Messages and 63
4- Make the homeworks(HW 1, HW 2, HW 3 and lesson 44 )
5- Reproducir
6- 76_Getting Access to the Template & DOM with @ViewChild
7- 78_Understanding the Component Lifecycle
8- Remember what is property binding

### Current lesson

Course project: Section 10 and section 12
Make the exercise to reinforce the knowledge.
**_C'mon you got this!!!_**

### Questions

1- When is a good reason to use `styles: []` (inline style) than `stylesUrl`
2- When is a good reason to make use of different selector
3- _Life cycle of a component (this is my homework xd)_
4- Experimental support for decorators is a feature that is subject to change in a future relasease (when manually creating a component)

<!-- 5- ng-content is a hook??? Why maximilian called a hook, a typo? -->

6- Service workers and he said better approach the renderer than accessing the DOM
7- Al utilizar @Injectable se tiene que usar en todos los "services", versiones anteriores no necesitaban pero ahora es buena practica o es obligatorio
8- Different way of injecting a service (Line 359 - 370?)
9- Why there are Routes and Route?

14- bleedout term in angular????

### Coso de CLI que es

Es una interface de linea de comandos que nos permite inicializar, desarrollar, scaffolding (hacer cimientos) y mantener las aplicaciones de angular directamente en la terminal. Gracias a esto nos permite automatizar tareas que tendriamos que hacer manualmente.

Es un programa que se instala en tu equipo, lo instalas con npm o yarn por eso lo pones -g para que puedas utilizarlo cuando quieras. Se tiene que tener instalado nodejs porque angularCLI corre sobre nodejs

Un comando es ng new, le dices a angularcli que quieres un proyecto de angular.

Un schematic es una plantilla que genera codigo y que soporta logica compleja. Ejemplo: agregar autentificacion a to app de angular.

A veces pasa que tienes diferentes versiones de angular, por ejemplo tienes instalada la version 14.0.0 global pero un proyecto de legado tiene la 7.0.0.

**Realmente esto ya es viejo, angular solito te lo pone el puerto**
Tendras que cambiar de version de node con nvm, ademas que puede ocurrir que el puerto ya esta ocupado por la version que ya tienes de angular, asi que tendrias que cambiar el puerto. `ng serve --port 4002 `
