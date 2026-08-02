const frameworkRegistry = require("../registry/framework.registry");

class FrameworkResolver {
  resolve(name = "express") {
    const framework = frameworkRegistry.get(name);

    if (!framework) {
      throw new Error(`Framework "${name}" is not supported.`);
    }

    return framework;
  }
}

module.exports = new FrameworkResolver();
