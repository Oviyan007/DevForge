const ora = require("ora");

class SpinnerService {
  constructor() {
    this.spinner = ora();
  }

  start(text) {
    this.spinner.start(text);
  }

  succeed(text) {
    this.spinner.succeed(text);
  }

  fail(text) {
    this.spinner.fail(text);
  }

  warn(text) {
    this.spinner.warn(text);
  }

  info(text) {
    this.spinner.info(text);
  }

  stop() {
    this.spinner.stop();
  }
}

module.exports = new SpinnerService();
