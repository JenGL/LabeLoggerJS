import Logger from './logger';
import level from './log_levels';

/**
 * This class implements the Logger service.
 * It exposes the same method of the console object and enable/disable them base on the chosen loglevel and label.
 *
 * @class
 */
export default class LoggerWrapper {

  /**
   *
   * @constructor
   * @param label The label of the logger.
   * @param service The log service.
   */
  constructor(label, service) {
    this.label = label;
    this.logger = new Logger();
    this._logService = service;
  }

  debug(...args) {
    if (this._logService.isLevelEnabled(level.DEBUG) && this._logService.isLabelActive(this.label)) {
      this.logger.debug("["+this.label+"]: ",...args);
    }
  }

  info(...args) {
    if (this._logService.isLevelEnabled(level.VERBOSE) && this._logService.isLabelActive(this.label)) {
      this.logger.info("["+this.label+"]: ",...args);
    }
  }

  log(...args) {
    if (this._logService.isLevelEnabled(level.VERBOSE) && this._logService.isLabelActive(this.label)) {
      this.logger.log("["+this.label+"]: ",...args);
    }
  }

  warn(...args) {
    if (this._logService.isLevelEnabled(level.WARN) && this._logService.isLabelActive(this.label)) {
      this.logger.warn("["+this.label+"]: ",...args);
    }
  }

  error(...args) {
    if (this._logService.isLevelEnabled(level.ERROR) && this._logService.isLabelActive(this.label)) {
      this.logger.error("["+this.label+"]: ",...args);
    }
  }
}