const path = require("path");
const { pascalCase } = require("change-case");

const FileService = require("../../services/file.service");
const configService = require("../../services/config.service");
const frameworkResolver = require("../../resolver/framework.resolver");
const templateService = require("../../services/template.service");
const logger = require("../../services/logger.service");

const fileService = new FileService();

class ModuleGenerator {
  async generate(moduleName) {
    const config = await configService.load();

    const framework = frameworkResolver.resolve(config.framework);

    const moduleRoot = path.join(process.cwd(), config.modules, moduleName);

    // Create folders
    for (const folder of framework.module.structure) {
      await fileService.createDirectory(path.join(moduleRoot, folder));
    }

    // Generate template files
    for (const template of framework.module.templates) {
      const renderedContent = await templateService.render(
        path.join(framework.templateRoot, template.template),
        {
          moduleName,
          className: pascalCase(moduleName),
        },
      );

      const outputFile = template.output.replace(
        "<%= moduleName %>",
        moduleName,
      );

      await fileService.writeFile(
        path.join(moduleRoot, outputFile),
        renderedContent,
      );
    }

    logger.success(`Module "${moduleName}" created successfully.`);
  }
}

module.exports = ModuleGenerator;
