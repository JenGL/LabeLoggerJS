import Logger from './log_wrapper';
import ConcreteLogger from './logger.js';

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
    if (LogService.instance) return LogService.instance;
    this._concreteLoggerClass = ConcreteLogger;
    this._level = level;
    this._loggers = {};
    this._settings = {};
    LogService.instance = this;
  }

  set level(level) {
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

  set Logger(ConcreteLoggerClass){
    this._concreteLoggerClass = ConcreteLoggerClass;
  }

  get Logger(){
    return this._concreteLoggerClass;
  }
}