# SocAuto

SoftUni graduate project developed with Angular 12. 

**SocAuto** is an Angular front-end app (SPA) for viewing and managing socialistic automobile listings. The application allows visitors to browse through different automobile listings. Users may register with a username and password, which allows them to create their own listings. Listing authors can also edit or delete their own publications at any time.

## Functionality
* Authentication of users (registration and login)
* All users (both authenticated and unauthenticated) can view the catalog page with the automobile listings posted by users
* The catalog is paginated and shows 6 automobile listings per page
* Only authenticated users can create automobile listings
* Only the author (creator/owner) of the automobile listing can edit and delete it


## Used Technologies
* Angular CLI 12
* TypeScript
* HTML 5
* CSS 3
* Back4App

## Views (Pages)
* **Home Page** (Welcome page)
* **Login/Register** - registration with username and password
* **All Automobiles** - catalog with all the cars paginated by 6 per page
* **Details Page** - additional information (photo, brand, model, year, country of origin, description) about the automobile listing available to all users and an ability for the listing author to edit or delete it
* **By Year** - filter automobiles by their production year
* **Create Page** - authenticated users can create automobile listings
* **Edit Page** - authenticated users can edit the automobile listings which they created
* **Profile Page** - the logged-in user can view all automobile listings created by him
* **Page Not Found** - an error page for all paths which don't exist on the application

## Authorization Control
* Guests can register and view the catalog, the automobile listing details and filter the automobile listings by year
* Registered users can create new automobile listings and view their own profile with all the listings they have personally created
* Only the author of an automobile listing can edit or delete it

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
