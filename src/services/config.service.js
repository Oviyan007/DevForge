const fs = require("fs-extra");
const path = require("path");

class ConfigService {
  constructor() {
    this.configFile = "devforge.config.json";
  }

  async load(projectPath = process.cwd()) {
    const configPath = path.join(projectPath, this.configFile);

    const exists = await fs.pathExists(configPath);

    if (!exists) {
      throw new Error(
        `"${this.configFile}" not found. Are you inside a DevForge project?`,
      );
    }

    return await fs.readJson(configPath);
  }
}

module.exports = new ConfigService();
