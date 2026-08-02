const ModuleGenerator = require("../generators/module/module.generator");

module.exports = function (program) {
  program
    .command("generate <type> <name>")
    .alias("g")
    .description("Generate project resources")
    .action(async (type, name) => {
      switch (type.toLowerCase()) {
        case "module":
          await new ModuleGenerator().generate(name);
          break;

        default:
          console.log(`Unknown generator: ${type}`);
      }
    });
};
