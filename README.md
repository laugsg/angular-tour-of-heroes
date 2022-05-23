# AngularTourOfHeroes

Commands used:

1. ng new [app-name]
2. ng serve --open
3. ng generate component [component-name]
4. ng generate service [service-name]

Built-in used:

1. `[(ngModel)]` - `FormsModule` - `@NgModule`
2. `*ngFor`
3. `*ngIf`

## the application shell

You'll find the implementation of the shell AppComponent distributed over three files:

| FILES              | DETAILS                                          |
| ------------------ | ------------------------------------------------ |
| app.component.ts   | The component class code, written in TypeScript. |
| app.component.html | The component template, written in HTML.         |
| app.component.css  | The component's private CSS styles.              |

### Change the application title

1. Create a class property in `app.component.ts` file like `title = 'Tour of Heroes';`
2. Add the property in the `app.component.html` component template file like `<h1>{{title}}</h1>`

## Component metadata

`@Component` is a decorator function that specifies the Angular metadata for the component.

The CLI generated three metadata properties:

| PROPERTIES  | DETAILS                                             |
| ----------- | --------------------------------------------------- |
| selector    | The component's CSS element selector.               |
| templateUrl | The location of the component's template file.      |
| styleUrls   | The location of the component's private CSS styles. |

1. The **'selector' match the HTML template that identifies this component** within a parent component's template ('app-heroes').

2. The `ngOnInit() is a lifecycle hook`. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.

3. Always export the component class so you can import it elsewhere … like in the AppModule.

### Show the Component view

1. To display the Component, you must add it to the template of the shell AppComponent.
2. The 'app-heroes' is the element selector, so add an `<app-heroes>` element to the shell.

## Contracts or Interfaces

In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

### Interfaces

One of TypeScript’s core principles is that type checking focuses on the shape that values have.

simple example:

```
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

The type checker checks the call to printLabel. The printLabel function has a single parameter that requires that the object passed in has a property called label of type string. Notice that our object actually has more properties than this, but the compiler only checks that at least the ones required are present and match the types required. There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit.

We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string:

```
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

The interface LabeledValue is a name we can now use to describe the requirement in the previous example. It still represents having a single property called label that is of type string. Notice we didn’t have to explicitly say that the object we pass to printLabel implements this interface like we might have to in other languages. Here, it’s only the shape that matters. If the object we pass to the function meets the requirements listed, then it’s allowed.

It’s worth pointing out that the type checker does not require that these properties come in any sort of order, only that the properties the interface requires are present and have the required type.

## Two-way Data binding

To Edit, a textbox should both display the hero's name property and update that property as the user types.

That means data flows:

1. from the component class out to the screen
2. and from the screen back to the class.

`[(ngModel)]` is Angular's two-way data binding syntax.

### 1. `[(ngModel)]`

It binds the property value and the HTML textbox so that data can flow in both directions: From the property to the textbox and from the textbox back to the property.

> IMPORTANT: Although `ngModel` is a valid Angular directive, it isn't available by default. It belongs to the optional `FormsModule` and you must opt-in to using it.

### 2. AppModule

Angular needs to know how the pieces of your application fit together and what other files and libraries the application requires. This information is called metadata. Some of the metadata is in the `@Component` decorators and other critical metadata is in `@NgModule` decorators.

The most important `@NgModule` decorator annotates the top-level AppModule class.

### 3. Import FormsModule

Open the top-level Module where data is flowing and import the FormsModule symbol from the @angular/forms library.

```
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
```

Then add `FormsModule` to the `@NgModule` metadata's imports array, which contains a list of external modules that the application needs.

## Declare Components

Every component must be declared in exactly one NgModule. You didn't declare the your Components, so why did the application work? It worked because the Angular CLI declared HeroesComponent in the AppModule when it generated that component.

## \*ngFor

The \*ngFor is Angular's repeater directive, It repeats the host element for each element in a list.

```
<li *ngFor="let hero of heroes">
```

The syntax in this example is as follows:

| SYNTAX                        | DETAILS                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| `<li>`                        | Host element.                                                                                    |
| `heroes`                      | Holds the list                                                                                   |
| `hero`                        | Holds the current object for each iteration through the list.                                    |
| `*ngFor="let hero of heroes"` | 'For x of obj (variable of iterable)' statement: loops through the values of an iterable object. |

## Event binding

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

```
<button type="button" (click)="onSelect(hero)">
```

1. The handler is a method from Component class.
2. The event inside the parentheses is the event to listen.
3. The expression to execute is the handler within quotes.

## style class Binding

Angular's class binding can add and remove a CSS class conditionally. Add `[class.some-css-class]="some-condition"` to the element you want to style.

## @input()
Input decorator refers to _"Data to be injected into a Component"_. In React it would be like _"props"_ as `<el text={'pizza'}>`.

This avoid change Component Class but only change its template (this Angular feature is called 'Property binding').

### Property binding
Property binding helps to set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.

### Sharing data between child and parent directives and components.

@Input() and @Output() give a child component a way to communicate with its parent component. `@Input() lets a parent component update data in the child component`. Conversely, `@Output() lets the child send data to a parent component`.

### Sending data to a child component

To use @Input(), you must configure the parent and child.

1. Configuring the child component
    1. Import Input decorator
    2. @Input() decorates the property
    ```
      import { Component, Input } from '@angular/core'
      export class ItemDetailComponent {
        @Input() chilProp = ''
      }
    ```

<br />

1. Configuring the parent component
    1. Introduce the child component using the property binding ('[]') within the parent component template, providing to the Parent Class access to Child Class properties.
    ```
    <app-item-detail [chilProp]="parentProp"></app-item-detail>
    ```

`[chilProp]="parentProp"` is a one way data binding from the parentProp property of the Parent Class to the chilProp property of the Child Class.

Now when the user clicks an element in the list, the parentProp changes, then, the property binding updates chilProp and the Child Class displays the new data.



## Why services
Services are a great way to share information among classes that don't know each other. 

You'll rely on Angular dependency injection to inject it into the parentComponent constructor.

You'll create a MessageService and inject it in two places.

1. Inject in dataService, which uses the service to send a message
2. Inject in MessagesComponent, which displays that message














