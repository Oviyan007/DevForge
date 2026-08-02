const ProjectGenerator = require("../generators/project/project.generator");

module.exports = function registerCreateCommand(program) {
  program
    .command("create <projectName>")
    .description("Create a new Rynex project")
    .action(async (projectName) => {
      const generator = new ProjectGenerator();

      await generator.generate(projectName);
    });
};
