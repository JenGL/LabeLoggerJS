/**
 * This class implements the Logger service.
 * It exposes the same method of the console object and enable/disable them base on the chosen loglevel.
 *
 * @class
 */
export default class Logger {

  debug(...args) {
    console.log(...args);
  }

  info(...args) {
    console.info(...args);
  }

  log(...args) {
    console.log(...args);
  }

  warn(...args) {
    console.warn(...args);
  }

  error(...args) {
    console.error(...args);
  }
}