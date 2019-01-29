'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const clientType = 'Angular 5 (https://angular.io/)';
const electronType = 'Electron (https://electronjs.org/)';
const cordovaType = 'Cordova (https://cordova.apache.org/)';

let files = [
	'README.md',
	'nodejs-project/package.json',
	'.gitignore',
	'nodejs-project/gulpfile.js',
	'nodejs-project/.env',
	'nodejs-project/api',
	'nodejs-project/dist/index.html'
]

let clientFiles = [
	'angular-project/package.json',
	'angular-project/tsconfig.json',
	'angular-project/tslint.json'
]

let electronFiles = [
	'electron-app/package.json',
	'electron-app/electron.app.config.json',
]

let cordovaFiles = [
	'cordova-app/package.json',
	'cordova-app/config.xml'
]

let prompts = [];
let clients = ['None', clientType];
let electrons = ['None', electronType];
let cordovas = ['None', cordovaType];

for (let c of clients) {
	for (let e of electrons) {
		for (let co of cordovas) {
			prompts.push({
				client: c,
				electron: e,
				cordova: co
			})
		}
	}
}


for (let p of prompts) {
	describe('generator-full-stack-api:app Front-end: ' + p.client +' ,Electron: ' +p.electron+' ,Cordova: ' +p.cordova, () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../generators/app'))
			.withPrompts({
				name: 'name',
				description: 'description',
				client: p.client,
				electron: p.electron,
				cordova: p.cordova
			});
		});

		it('create files', () => {
			assert.file(files);
			if (p.client === clientType)
				assert.file(clientFiles);
			if (p.electron === electronType)
				assert.file(electronFiles);
			if (p.cordova === cordovaType)
				assert.file(cordovaFiles);

		});

	});
}
