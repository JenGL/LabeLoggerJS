# LabeLoggerJS
Label based logger for javascript. Allows to enable specific logs command identified with labels.

# Usage

* import log_service.js and log_level.js
* create logservice
* query a logger with label to log service
* use the logger

# example
```
import LogService from 'log_service.js';
import level from 'log_level.js';

const logS = new LogService(level.DEBUG);
const logger = logS.getLogger("DB");

logger.log("prova"); // print nothing because label DB is not active
logS.active("DB");

logger.log("test"); // prints "[DB]: test"
```
# RunTime label/level configuration

The LogService instance is assigned to window.logger in such a way you can use logger.activate() and logger.level 
directly from the browser console in order to change the logger settings
