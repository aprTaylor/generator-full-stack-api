var Generator = require('yeoman-generator')
	var chalk = require('chalk')
	var yosay = require('yosay')
	const clientType = 'Angular 5 (https://angular.io/)';
	const electronType = 'Electron (https://electronjs.org/)';
	const cordovaType = 'Cordova (https://cordova.apache.org/)';

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
					message: 'Do you want to generate angular client project?',
					choices: [
						'None',
						clientType
					]
				},
				   {
					type: 'list',
					name: 'electron',
					message: 'Do you want to generate electron packaging project?',
					choices: [
						'None',
						electronType
					]
				},
				{
					type: 'list',
					name: 'cordova',
					message: 'Do you want to generate cordova packaging project?',
					choices: [
						'None',
						cordovaType
					]
				}
			]).then((answers) => {
			this.props = answers;
			this.props.packs = '';
			this.log('\n\n');
			this.log(chalk.yellow('Name: ' + answers.name));
			this.log(chalk.yellow('Description: ' + answers.description));
			this.log(chalk.yellow('Client: ' + answers.client));
			this.log(chalk.yellow('Electron: ' + answers.electron));
			this.log(chalk.yellow('Cordova: ' + answers.cordova));
			this.log('\n\n');

			this.props.feather = '';
		})

	}

	writing() {

		let files = [
			'README.md'
		]

		files.push('nodejs-project');

		if (this.props.client === clientType) {
			files.push('angular-project');
		} 
		if (this.props.electron === electronType) {
			files.push('electron-app');
		} 
		if (this.props.cordova === cordovaType) {
			files.push('cordova-app');
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
        process.chdir(process.cwd() + '/nodejs-project');
		this.npmInstall(this.props.packs.split(' '), {
			'save': true
		})
		this.npmInstall().then(() => {
			process.chdir(process.cwd() + '/..');
			this.log('\n\nDone!!')
			this.log('Run ' + chalk.green('npm run server:dev') + ' to start server.\n')
			this.log('If you have generated client, run ' + chalk.green('npm install') + ' on angular-project folder, and after ' + chalk.green('npm run dev') + ' to start server with client.\n')
		})
	}

};
