# BackgroundLayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Loading javascripts for Microfrontend App
For this project, all microfrontend elements are retrieved from `http://localhost:3000/`. 
There are essentially two ways of loading elements in this parent app:

### Method 1 - Add script tag to html
This method is being used currently in this project. Simply go to a component's html or index.html and add script tags:
```
  <script src="http://localhost:3000/file/component-A.js"></script>
  <script src="http://localhost:3000/file/component-B.js"></script>
```
Refer to [index.html](./src/index.html)

### Method 2 - Use script loading service
For this method, a service is used to load scripts into appropriate components.
<b>Note:</b> Angular's @Input with elements do not work with this approach; hence this is not being used. 


The script.store contains element to script mapping; refer to [script.store.ts](./src/app/script.store.ts)

Wherever these scripts (web components) are to be used, the appropriate script has to be loaded first via [script.service.ts](./src/app/script.service.ts)

The loading takes place in the constructor of the component, commented out in this case. Refer to [app.component.ts](./src/app/app.component.ts)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# microfrontend-background-layer
