# RickAndMorty

software version:
- TypeScript 4.7.4
- RXjs 7.5.7
- Node: 18.12.0
- Package Manager: npm 8.19.2
- Angular CLI 14.2.9
- Bootstrap 5
- Angular Material 13.0.0
- File Saver 2.0.5
- Angular Font Awesome 0.12.0

#Components
- AppComponent: It contains the character list. There are 4 methods.
  - constructor: it initializes some dependencies.
  - ngOnInit: it allows to visualize some Font Awesome icons and it makes the HTTP request to get all the character data and their related episodes.
  - visualizarDetalles: it loads the component named "detallesComponent".
  - visualizarLocalizacion: it loads the component named "localizacionComponent".
  - guardarFavorito: it downloads a JSON that contains an specific character data.
- DetallesComponent: It contains more information based on an specific character that the user selected previously in app.component. There are 2 methods
  - constructor: it initializes some dependencies.
  - ngOnInit: It makes the HTTP request to get the character information.
- LocalizacionComponent: It contains more information based on an specific character location. There are 2 methods
  - constructor: it initializes some dependencies.
  - ngOnInit: It makes the HTTP request to get the location information.

## Development server
Run "npm install" to install all dependencies required.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
