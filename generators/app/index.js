var Generator = require('yeoman-generator')
	var chalk = require('chalk')
	var yosay = require('yosay')
	const clientType = 'Angular 5 (https://angular.io/)';

module.exports = class extends Generator {

	prompting() {

		this.log(yosay(
				'Welcome to ' + chalk.red('angular-full-stack-api') + ' generator!'))

		this.appname = this.appname.replace(/\s+/g, '-');

		return this.prompt([{
					type: 'input',
					name: 'name',
					message: 'Your project name',
				default:
					this.appname
				}, {
					type: 'input',
					name: 'description',
					message: 'Project description',
				default:
					'Awesome description'
				}, {
					type: 'list',
					name: 'client',
					message: 'Do you want to generate angular client?',
					choices: [
						'None',
						clientType
					]
				}
			]).then((answers) => {
			this.props = answers;
			this.props.packs = '';
			this.log('\n\n');
			this.log(chalk.yellow('Name: ' + answers.name));
			this.log(chalk.yellow('Description: ' + answers.description));
			this.log(chalk.yellow('Client: ' + answers.client));
			this.log('\n\n');

			this.props.feather = '';
		})

	}

	writing() {

		let files = [
			'README.md',
			'gulpfile.js'
		]

		files.push('package.json');
		files.push('.env');
		files.push('server');

		if (this.props.client === clientType) {
			files.push('client');
		} else {
			files.push('client/dist/index.html');
		}

		for (let file of files) {
			this.fs.copyTpl(
				this.templatePath(file),
				this.destinationPath(file), {
				name: this.props.name,
				description: this.props.description,
				feather: this.props.feather
			})
		}
		this.fs.copy(
			this.templatePath('_.gitignore'),
			this.destinationPath('.gitignore'), {
			name: this.props.name,
			description: this.props.description
		})

	}

	install() {
		this.npmInstall(this.props.packs.split(' '), {
			'save': true
		})
		this.npmInstall().then(() => {
			this.log('\n\nDone!!')
			this.log('Run ' + chalk.green('npm run server:dev') + ' to start server.\n')
			this.log('If you have generated client, run npm install on client folder, and after' + chalk.green('npm run dev') + ' to start server with client.\n')
		})
	}

};
