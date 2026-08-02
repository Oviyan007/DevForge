const chalk = require("chalk");

class LoggerService {
  success(message) {
    console.log(chalk.green(`✔ ${message}`));
  }

  error(message) {
    console.log(chalk.red(`✖ ${message}`));
  }

  warning(message) {
    console.log(chalk.yellow(`⚠ ${message}`));
  }

  info(message) {
    console.log(chalk.blue(`ℹ ${message}`));
  }

  title(message) {
    console.log(chalk.cyan.bold(message));
  }
}

module.exports = new LoggerService();
