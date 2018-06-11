
class Facade {
	constructor(schema) {
		this.model = schema;
	}

	create(body) {
		const model = new this.model(body);
		return this.model;
	}

	getModel() {
		return this.model;
	}

}

module.exports = Facade;
