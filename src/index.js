const { Command } = require("commander");
const registerCreateCommand = require("./commands/create.command");
const registerGenerateCommand = require("./commands/generate.command");
const program = new Command();

program
  .name("rynex")
  .description("Opinionated Node.js Application Generator")
  .version("1.0.0");

registerCreateCommand(program);
registerGenerateCommand(program);

program.parse(process.argv);
