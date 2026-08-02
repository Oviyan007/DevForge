const path = require("path");

const templateService = require("../../services/template.service");
const FileService = require("../../services/file.service");
const logger = require("../../services/logger.service");
const frameworkResolver = require("../../resolver/framework.resolver");
const spinner = require("../../services/spinner.service");

class ProjectGenerator {
  async generate(projectName) {
    const fileService = new FileService();

    // Resolve framework
    const selectedFramework = frameworkResolver.resolve("express");
    const projectConfig = selectedFramework.project;
    // Create project directory
    spinner.start("Creating project directory...");
    await fileService.createDirectory(projectName);
    spinner.succeed("Project directory created");

    // Create folder structure
    spinner.start("Creating folder structure...");
    for (const folder of projectConfig.structure) {
      await fileService.createDirectory(path.join(projectName, folder));
    }
    spinner.succeed("Folder structure created");

    // Generate templates
    spinner.start("Generating project templates...");
    for (const template of projectConfig.templates) {
      const renderedContent = await templateService.render(
        path.join(selectedFramework.templateRoot, template.template),
        {
          projectName,
          dependencies: selectedFramework.dependencies,
        },
      );

      await fileService.writeFile(
        path.join(projectName, template.output),
        renderedContent,
      );
    }
    spinner.succeed("Project templates generated");

    logger.success(`Project "${projectName}" created successfully.`);
  }
}

module.exports = ProjectGenerator;
