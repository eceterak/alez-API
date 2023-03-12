const { capitalize } = require('../utils/helpers');

module.exports = class NotFoundException {
  constructor(value, model = 'resource') {
    this.value = value;
    this.model = model;
    this.statusCode = 404;
    this.stack = new Error().stack;
  }

  get message() {
    return `${capitalize(this.model)} not found with id of ${this.value}`;
  }
};
