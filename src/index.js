import LogService from './logger/log_service';
import level from './logger/log_levels';
import LogInterface from './logger/interface.js';

const log_service = new LogInterface(new LogService(level.WARN));
window.logger = log_service; // enable run time label activation

export {log_service as LogService};
export {level as LogLevel}