'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const clientType = 'Angular 5 (https://angular.io/)';

let files = [
	'README.md',
	'package.json',
	'.gitignore',
	'gulpfile.js',
	'.env',
	'server',
	'client/dist/index.html'
]

let clientFiles = [
	'client/package.json',
	'client/tsconfig.json',
	'client/tslint.json'
]

let prompts = [];
let clients = ['None', clientType];

for (let c of clients) {
	prompts.push({
		client: c
	})
}

for (let p of prompts) {
	describe('generator-full-stack-api:app Front-end: ' + p.client, () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../generators/app'))
			.withPrompts({
				name: 'name',
				description: 'description',
				client: p.client
			});
		});

		it('create files', () => {
			assert.file(files);
			if (p.client === clientType)
				assert.file(clientFiles);

		});

	});
}
