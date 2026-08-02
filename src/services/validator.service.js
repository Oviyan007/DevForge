const fs = require("fs-extra");
const validatePackageName = require("validate-npm-package-name");

class ValidatorService {
  validateProjectName(projectName) {
    const result = validatePackageName(projectName);

    if (!result.validForNewPackages) {
      throw new Error("Invalid npm package name.");
    }
  }

  async projectExists(projectName) {
    return await fs.pathExists(projectName);
  }

  async ensureProjectDoesNotExist(projectName) {
    const exists = await this.projectExists(projectName);

    if (exists) {
      throw new Error(`Project "${projectName}" already exists.`);
    }
  }
}

module.exports = new ValidatorService();
