const { Command } = require("commander");
const registerCreateCommand = require("./commands/create.command");
const registerGenerateCommand = require("./commands/generate.command");
const program = new Command();

program
  .name("devforge")
  .description("Opinionated Express.js CLI Generator")
  .version("1.0.0");

registerCreateCommand(program);
registerGenerateCommand(program);

program.parse(process.argv);
