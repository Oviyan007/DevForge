const path = require("path");
const ejs = require("ejs");

class TemplateService {
  async render(templatePath, data = {}) {
    const fullPath = path.resolve(templatePath);

    return await ejs.renderFile(fullPath, data);
  }
}

module.exports = new TemplateService();
