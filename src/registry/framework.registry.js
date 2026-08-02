const expressFramework = require("../../frameworks/express/framework");

class FrameworkRegistry {
  constructor() {
    this.frameworks = {
      express: expressFramework,
    };
  }

  get(name) {
    return this.frameworks[name];
  }

  getAll() {
    return this.frameworks;
  }

  has(name) {
    return !!this.frameworks[name];
  }
}

module.exports = new FrameworkRegistry();
