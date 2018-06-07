
[![npm](https://img.shields.io/badge/npm-v8.9.4-green.svg)](https://www.npmjs.com/package/generator-full-stack-api)&nbsp;<img src="https://img.shields.io/github/forks/fullStackApp/generator-full-stack-api.svg">&nbsp;
<img src="https://img.shields.io/github/stars/fullStackApp/generator-full-stack-api.svg">&nbsp;<a href="https://github.com/fullStackApp/generator-full-stack-api/issues"><img src="https://img.shields.io/github/issues/fullStackApp/generator-full-stack-api.svg">
</a>&nbsp;

## generator-full-stack-api [![Build Status](https://travis-ci.com/fullStackApp/generator-full-stack-api.svg)](https://travis-ci.com/fullStackApp/generator-full-stack-api)

RESTful fullstack generator with [Angular CLI](https://github.com/angular/angular-cli), [Express.js](https://expressjs.com) and [Mongoose](https://mongoosejs.com).


## Generator Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-api using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-full-stack-api
```

Then generate your new project:

```bash
yo full-stack-api
```

### Getting started

```bash
npm run dev
```

Run `npm run dev` for a dev server. The browser will load `http://localhost:8080/`. Wait until the app is built. At any change, the app will automatically rebuild and sync the browser.

##### Creating API endpoints

To generate a new API endpoit:

```bash
yo full-stack-api:endpoint
```

After that you may need to reload the server and the router will load dynamically the route.

##### .env

```
# Node Server Port
PORT=8000

# Node Server Url
APP_URL=http://localhost:8000/

# BrowserSync Proxy Url
CALLBACK_URL=http://localhost:8080/

# MongodDB Url
MONGO_DB_URI=mongodb://localhost:27017/angular-api
```

Optionally, run the command bellow to generate a fresh .env file.

```bash
yo full-stack-api:dotenv
```

### Client Code scaffolding

You can use `ng` [Angular CLI](https://github.com/angular/angular-cli) for to use scaffolding in your project.
**It is used @angular/cli 1.7.4 for Angular 5**.


### Back-end

The API was built using Express and has support for MongoDB and Authentication ([passportjs](https://github.com/jaredhanson/passport)).

To run locally, requires MongoDB installed and running ([Install MongoDB](https://docs.mongodb.com/manual/installation/)).

##### Packages

| Name        | Version                                                                                                     | Docs                                                                                                                       | Description                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| express.js  | [![npm package](https://badge.fury.io/js/express.svg)](https://www.npmjs.com/package/express)     | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://expressjs.com/)                   | Minimalist web framework for Node.js                                                                   |
| mongoose    | [![npm package](https://badge.fury.io/js/mongoose.svg)](https://www.npmjs.com/package/mongoose)    | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](http://mongoosejs.com/docs/guide.html)    | Elegant MongoDB object modeling for Node.js                                                            |
| body-parser | [![npm package](https://badge.fury.io/js/body-parser.svg)](https://www.npmjs.com/package/body-parser) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/body-parser) | Node.js body parsing middleware                                                                        |
| morgan      | [![npm package](https://badge.fury.io/js/morgan.svg)](https://www.npmjs.com/package/morgan)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/morgan)      | HTTP request logger middleware for node.js                                                             |
| bluebird    | [![npm package](https://badge.fury.io/js/bluebird.svg)](https://www.npmjs.com/package/bluebird)    | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/petkaantonov/bluebird) | Bluebird is a fully featured promise library with focus on innovative features and performance         |
| dotenv      | [![npm package](https://badge.fury.io/js/dotenv.svg)](https://www.npmjs.com/package/dotenv)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/motdotla/dotenv)       | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |
| cookie-parser | [![npm version](https://badge.fury.io/js/cookie-parser.svg)](https://badge.fury.io/js/cookie-parser)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/cookie-parser)       |  Parse HTTP request cookies. |
| express-session | [![npm version](https://badge.fury.io/js/express-session.svg)](https://badge.fury.io/js/express-session)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/session)       | Simple session middleware for Express. |


## File tree
```
├── client
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── services
│   │       ├── app.service.spec.ts
│   │       └── app.service.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── .gitignore
├── .angular-cli.json
├── .editorconfig
├── .env
├── gulpfile.js
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
├── server
│   ├── index.js
│   ├── config
│   │   └── database.js
│   ├── lib
│   │   ├── controller.js
│   │   └── facade.js
│   ├── model
│   │   ├── food
│   │   │   ├── controller.js
│   │   │   ├── facade.js
│   │   │   ├── router.js
│   │   │   └── schema.js
│   │   └── user
│   │       ├── controller.js
│   │       ├── facade.js
│   │       ├── router.js
│   │       └── schema.js
│   └── routes.js
├── tsconfig.json
└── tslint.json
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
