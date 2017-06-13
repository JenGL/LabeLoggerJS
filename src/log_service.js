import Logger from './log_wrapper';

/**
 * This class implements the Logger service.
 * Logger service is used o retrieve loggers of a specific label.
 *
 * @class
 */
export default class LogService {

  /**
   *
   * @constructor
   * @param level The desired log level.
   */
  constructor(level) {
    this._level = level;
    this._loggers = {};
    this._settings = {};
    window.logger = this; // enable run time label activation
  }

  set level(level){
    this._level = level;
  }

  get level() {
    return this._level;
  }

  getLogger(label) {
    this._loggers[label] = this._loggers[label] || new Logger(label, this);
    return this._loggers[label];
  }

  isLabelActive(label) {
    return this._settings[label];
  }

  isLevelEnabled(level) {
    return this.level >= level;
  }

  active(label) {
    this._settings[label] = true;
  }

  deactive(label) {
    this._settings[label] = false;
  }
}