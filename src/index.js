import LogService from './logger/log_service';
import level from './logger/log_levels';

const log_service = new LogService(level.WARN);
window.logger = log_service; // enable run time label activation

export {log_service as LogService};
export {level as LogLevel};