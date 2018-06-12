
[![npm](https://img.shields.io/badge/npm-v8.9.4-green.svg)](https://www.npmjs.com/package/generator-full-stack-api)&nbsp;<img src="https://img.shields.io/github/forks/fullStackApp/generator-full-stack-api.svg">&nbsp;
<img src="https://img.shields.io/github/stars/fullStackApp/generator-full-stack-api.svg">&nbsp;<a href="https://github.com/fullStackApp/generator-full-stack-api/issues"><img src="https://img.shields.io/github/issues/fullStackApp/generator-full-stack-api.svg">
</a>&nbsp;

## generator-full-stack-api [![Build Status](https://travis-ci.com/fullStackApp/generator-full-stack-api.svg)](https://travis-ci.com/fullStackApp/generator-full-stack-api)

RESTful fullstack generator with [Angular CLI](https://github.com/angular/angular-cli), [Express.js](https://expressjs.com) and [Mongoose](https://mongoosejs.com).
You can also choose a mongo db embedded driver [tungus](https://github.com/sergeyksv/tungus) setting a env variable.



## NEWS

For every release there is the features list in [CHANGELOG](https://github.com/amanganiello90/generator-full-stack-api/blob/master/CHANGELOG.md)

* Embedded mongodb feature release 1.2.0

June 12,2018  | **Release 1.2.0** | available from [npm](https://www.npmjs.com/package/generator-full-stack-api/v/1.2.0)  |
---- | ---- | ---- |

* First Release 1.0.1

June 09,2018  | **Release 1.0.1** | available from [npm](https://www.npmjs.com/package/generator-full-stack-api/v/1.0.1)  |
---- | ---- | ---- |


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

### Run all stack in watching mode

```bash
npm run dev
```

Run `npm run dev` for a dev server. The browser will load `http://localhost:8080/`. Wait until the app is built. At any change, the app will automatically rebuild and sync the browser.
In this way you run server and front end app concurrently in watching development mode.

### Client tasks

To build your angular app you can run:

```bash
npm run build.prod
```

to serving:

```bash
npm run client
```

### Run all stack without build frontend code

```bash
npm start
```

With this command you execute the api server loading the **client/dist** part that you have already built.
It's the same to run 

```bash
node api/index.js
```


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

# Variable to set compatibility with mongodb
TUNGUS_DB_OPTIONS =  { nativeObjectID: true, searchInArray: true };

# if mongodb is embedded, that is tungus
MONGO_EMBEDDED=true

# MongodDB Url
MONGO_DB_URI=mongodb://localhost:27017/angular-api
```

Optionally, run the command bellow to generate a fresh .env file.

```bash
yo full-stack-api:dotenv
```

### Client Code scaffolding

When you run **yo full-stack-api**, you can choose to generate the client code compliant with [Angular CLI](https://github.com/angular/angular-cli). **It is used @angular/cli 1.7.4 for Angular 5**.


### Back-end

The API was built using Express with MongoDB integration (tungus driver for embedded mode)

For not embedded mode, requires MongoDB installed and running on your machine or externally ([Install MongoDB](https://docs.mongodb.com/manual/installation/)).

So, you can change the mongodb endpoint with the variable inserted in the **.env** file :

```
MONGO_DB_URI=mongodb://localhost:27017/angular-api
```

Else, if you want to use the embedded mode, it's necessary only to insert the variable:

```
MONGO_EMBEDDED=true
```

In this way the objects are saved as a file under the config folder.


#### Api exposed

On default, it is created an **users** entity with this schema:


```
const userSchema = new Schema({
		id: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		email: {
			type: String
		},
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String,
			required: true
		}
	});
```


All CRUD endpoint operations are:

* api/users : Get Request that returns all users entities created (empty collection object if nothing exists)
* api/users : Post Request that creates a user with a request mapping its fields. On success it returns the user created.
* api/users/{id} : Get Request that returns an user entity with the specified id (else 404 status if not exists)
* api/users/{id} : Delete Request that deletes an user entity with the specified id. On success it returns the 204 status else 404 .
* api/users/{id} : Put Request that updates the user with a specified id according your request fields. On success it returns the 204 status else 404 .

You can generate another entity and endpoint with:

```bash
yo full-stack-api:endpoint
```

So you will have every previous CRUD operation endpoints with the initial suffix **api/entity-name** .
After this, you have only to change under **api/model/entity-name/schema.js** the fields of your document.



##### Main Packages

| Name        | Version                                                                                                     | Docs                                                                                                                       | Description                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| express.js  | [![npm package](https://badge.fury.io/js/express.svg)](https://www.npmjs.com/package/express)     | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://expressjs.com/)                   | Minimalist web framework for Node.js                                                                   |
| mongoose    | [![npm package](https://badge.fury.io/js/mongoose.svg)](https://www.npmjs.com/package/mongoose)    | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](http://mongoosejs.com/docs/guide.html)    | Elegant MongoDB object modeling for Node.js                                                            |
| body-parser | [![npm package](https://badge.fury.io/js/body-parser.svg)](https://www.npmjs.com/package/body-parser) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/body-parser) | Node.js body parsing middleware                                                                        |
| morgan      | [![npm package](https://badge.fury.io/js/morgan.svg)](https://www.npmjs.com/package/morgan)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/morgan)      | HTTP request logger middleware for node.js                                                             |
| bluebird    | [![npm package](https://badge.fury.io/js/bluebird.svg)](https://www.npmjs.com/package/bluebird)    | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/petkaantonov/bluebird) | Bluebird is a fully featured promise library with focus on innovative features and performance         |
| dotenv      | [![npm package](https://badge.fury.io/js/dotenv.svg)](https://www.npmjs.com/package/dotenv)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/motdotla/dotenv)       | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |
| tungus      | [![npm package](https://badge.fury.io/js/tungus.svg)](https://www.npmjs.com/package/tungus)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/sergeyksv/tungus)       | Mongoose driver for TingoDB embedded database . |

## File tree

```
├── client
│   ├── src     
│   │   ├──app
│   │   │   ├── app.component.css
│   │   │   ├── app.component.html
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │ 
│   │   ├── assets
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── polyfills.ts
│   │   ├── styles.css
│   │   ├── test.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.spec.json
│   │   └── typings.d.ts
│   │   
│   │
│   ├── e2e
│   │   ├── app.e2e-spec.ts
│   │   ├── app.po.ts
│   │   └── tsconfig.e2e.json
│   │
│   ├── .angular-cli.json
│   ├── .editorconfig
│   ├── .gitignore
│   ├── karma.conf.js
│   ├── package.json
│   ├── protactor.conf.js
│   ├── README.md
│   ├── tsconfig.json
│   ├── tslint.json
│
├── .gitignore
├── .env
├── gulpfile.js
├── README.md
├── api
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

```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
