const fs = require("fs-extra");

class FileService {
  /**
   * Creates a directory if it doesn't already exist.
   * Parent directories are created automatically.
   *
   * @param {string} directoryPath
   */
  async createDirectory(directoryPath) {
    await fs.ensureDir(directoryPath);
  }
  async writeFile(filePath, content) {
    await fs.outputFile(filePath, content);
  }
}

module.exports = FileService;
