# `wc-ng-skeleton` — the skeleton for Angular 1.x apps
This project is an application skeleton for a typical [AngularJS][angularjs] web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

The skeleton contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

## Requirements
* nodejs 4.+
* npm 3.+

## Technology Stack
* TypeScript  
* Less
* Angular 1.x  
* Karma  
* Jasmine

## Getting Started

To get you started you can simply clone the `wc-ng-skeleton` repository and install the dependencies:

### Prerequisites

You need git to clone the `wc-ng-skeleton` repository. You can get git from [here][git].


### Install project dependencies


#### Install
```bash
npm i
```

If you don't have `typings` install it globally
 ```bash
# Global installation
npm i typings -g

# Install project dependencies 
typings i
```

### Change application name

Change application name in `src/app/config/app.config.ts`.  
It will be used as module name prefix for default modules.

## Directory Layout

```
src/app/                    --> all of the source files for the application
  app.less                --> default stylesheet
  modules/             --> all app specific modules
    main/           --> a module of application
      i18n/      --> a folder with translations for the module
      main.component.ts          --> module component
      main.less                  --> module styles
      main.module.ts             --> main module entry point
      main.partial.html          --> main component template
      main.routes.ts             --> main module routes
  core/                --> files to config your app bootstrapping
  config/              --> a folder with configs
    app.config.ts         --> app name config
    strategy.config.ts    --> application shell strategy config
  index.ts                --> application entry point
  app.module.ts           --> main application module
index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
```


## Useful commands
### Run local server
```bash
npm start
```

### Make a build
```bash
npm run build
```

### Run tests
```bash
npm run test
```

### Make commit with `commitizen` 
```bash
npm run commit
```

More info about `commitizen`  
[Small video lesson](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-committing-a-new-feature-with-commitizen)   
[Github repo](https://github.com/commitizen/cz-cli)


[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
